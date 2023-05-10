import { PrismaClient } from "@prisma/client";
import { times } from "../../../../../../data";
import { findAvailableTables } from "../../../../../../services/restaurant/findAvailableTables";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  query: { params: { slug: string } }
) {
  //console.log(query);
  const { searchParams } = new URL(request.url);
  const slug = query.params.slug;
  const day = searchParams.get("day");
  const time = searchParams.get("time");
  const partySize = searchParams.get("partySize");
  //console.log({ slug});

  if(request.method==="GET"){
    if (!day || !time || !partySize) {
      return new Response(
        JSON.stringify({
          hello: "Invalid data provider",
        }),
        {
          status: 400,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }
  
    const restaurant = await prisma.restaurant.findUnique({
      where: {
        slug,
      },
      select: {
        table: true,
        open_time: true,
        close_time: true,
      },
    });
  
    if (!restaurant) {
      return new Response(
        JSON.stringify({
          hello: "Invalid data provider",
        }),
        {
          status: 400,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }
  
    const searchTimesWithTable = await findAvailableTables({
      day,
      time,
      restaurant,
    });
  
    if (!searchTimesWithTable) {
      return new Response(
        JSON.stringify({
          hello: "Invalid data provider",
        }),
        {
          status: 400,
          headers: {
            "content-type": "application/json",
          },
        }
      );
    }
  
    const availabilities = searchTimesWithTable
      .map((t) => {
        const sumSeats = t.tables.reduce((sum, table) => {
          return sum + table.seats;
        }, 0);
  
        return {
          time: t.time,
          available: sumSeats >= parseInt(partySize),
        };
      })
      .filter((availability) => {
        const timeIsAfterOpeningHour =
          new Date(`${day}T${availability.time}`) >=
          new Date(`${day}T${restaurant.open_time}`);
        const timeIsBeforeClosingHour =
          new Date(`${day}T${availability.time}`) <=
          new Date(`${day}T${restaurant.close_time}`);
  
        return timeIsAfterOpeningHour && timeIsBeforeClosingHour;
      });
  
    return new Response(
      JSON.stringify({
        // hello: { searchTimes ,booking,bookingTablesObj,tables,searchTimesWithTable },
        hello: availabilities,
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
 
}

//http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability

//http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-01-01&time=20:00:00.000Z&partySize=4
//http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-05-07&time=14:00:00.000Z&partySize=4
