import { PrismaClient } from "@prisma/client";
import { times } from "../../../../../../data";
 
const prisma =new PrismaClient()

export async function GET(request: Request, query:{params:{slug:string}}) {
  console.log(query);
  // const { slug, day, time, partySize } = await request.json();
  const { searchParams } = new URL(request.url);
  const slug = query.params.slug
  const day = searchParams.get("day");
  const time = searchParams.get("time");
  const partySize = searchParams.get("partySize");
  console.log({ slug, day, time, partySize });

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

  const  searchTimes=times.find(t=>{
    return t.time===time

  })?.searchTimes;

  if(!searchTimes){
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

   
  const booking = await prisma.booking.findMany({
    where:{
      booking_time:{
        gte:new Date(`${day}T${searchTimes[0]}`),
        lte:new Date(`${day}T${searchTimes[searchTimes.length-1]}`)

      }
    },
    select:{
      number_of_people:true,
      booking_time:true,
      tables:true
    }
  })

  const bookingTablesObj:{[key:string]:{[key:number]:true}}={}

  booking.forEach(booking=>{
    bookingTablesObj[booking.booking_time.toISOString()]=booking.tables.reduce((obj,table)=>{
      return{
        ...obj,
        [table.table_id]:true
      }

    },{})

  })

  return new Response(
    JSON.stringify({
      hello: { searchTimes ,booking,bookingTablesObj},
    }),
    {
      status: 400,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

//http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability

//http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-01-01&time=20:00:00.000Z&partySize=4
//http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/availability?day=2023-05-07&time=09:50:14.000Z&partySize=4