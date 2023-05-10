import { Prisma, PrismaClient } from "@prisma/client";
import { findAvailableTables } from "../../../../../../services/restaurant/findAvailableTables";
const prisma = new PrismaClient();

export async function GET(
  request: Request,
  query: { params: { slug: string } }
) {
  const { searchParams } = new URL(request.url);

  const slug = query.params.slug as string;
  const day = searchParams.get("day") as string;
  const time = searchParams.get("time") as string;
  const partySize = searchParams.get("partySize") as string;

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      table: true,
      open_time: true,
      close_time: true,
      id: true,
    },
  });

  if (!restaurant) {
    return new Response(
      JSON.stringify({
        hello: "No Restaurant Found",
      }),
      {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return new Response(
      JSON.stringify({
        hello: "Restaurant is not open at that time",
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

  const searchTimeWithTable = searchTimesWithTable.find((t) => {
    return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
  });

  if (!searchTimeWithTable) {
    return new Response(
      JSON.stringify({
        hello: "No availability,cannot book",
      }),
      {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  const tablesCount: {
    2: number[];
    4: number[];
  } = {
    2: [],
    4: [],
  };

  searchTimeWithTable.tables.forEach((table) => {
    if (table.seats === 2) {
      tablesCount[2].push(table.id);
    } else {
      tablesCount[4].push(table.id);
    }
  });

  const tablesToBooks: number[] = [];

  let seatsRemaining = parseInt(partySize);

  while (seatsRemaining > 0) {
    if (seatsRemaining >= 3) {
      if (tablesCount[4].length) {
        tablesToBooks.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining = seatsRemaining - 4;
      } else {
        tablesToBooks.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining = seatsRemaining - 2;
      }
    } else {
      if (tablesCount[2].length) {
        tablesToBooks.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining = seatsRemaining - 2;
      } else {
        tablesToBooks.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining = seatsRemaining - 4;
      }
    }
  }

  return new Response(
    JSON.stringify({
      hello: tablesToBooks,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}

//http://localhost:3000/api/restaurant/vivaan-fine-indian-cuisine-ottawa/reserve?day=2023-05-07&time=14:00:00.000Z&partySize=4

export async function POST(
  request: Request,
  query: { params: { slug: string } }
) {
  const { searchParams } = new URL(request.url);

  // Query params
  const slug = query.params.slug as string;
  const day = searchParams.get("day") as string;
  const time = searchParams.get("time") as string;
  const partySize = searchParams.get("partySize") as string;


  const body = await request.json();
  const {booker_Email,bookerPhone,bookerFirstName,bookerLastName,bookerOccasion,bookerRequest}= body;




  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      table: true,
      open_time: true,
      close_time: true,
      id: true,
    },
  });

  if (!restaurant) {
    return new Response(
      JSON.stringify({
        hello: "No Restaurant Found",
      }),
      {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.open_time}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.close_time}`)
  ) {
    return new Response(
      JSON.stringify({
        hello: "Restaurant is not open at that time",
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

  const searchTimeWithTable = searchTimesWithTable.find((t) => {
    return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
  });

  if (!searchTimeWithTable) {
    return new Response(
      JSON.stringify({
        hello: "No availability,cannot book",
      }),
      {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }

  const tablesCount: {
    2: number[];
    4: number[];
  } = {
    2: [],
    4: [],
  };

  searchTimeWithTable.tables.forEach((table) => {
    if (table.seats === 2) {
      tablesCount[2].push(table.id);
    } else {
      tablesCount[4].push(table.id);
    }
  });

  const tablesToBooks: number[] = [];

  let seatsRemaining = parseInt(partySize);

  while (seatsRemaining > 0) {
    if (seatsRemaining >= 3) {
      if (tablesCount[4].length) {
        tablesToBooks.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining = seatsRemaining - 4;
      } else {
        tablesToBooks.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining = seatsRemaining - 2;
      }
    } else {
      if (tablesCount[2].length) {
        tablesToBooks.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining = seatsRemaining - 2;
      } else {
        tablesToBooks.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining = seatsRemaining - 4;
      }
    }
  }


  const booking=await prisma.booking.create({
    data:{
      number_of_people:parseInt(partySize),
      booking_time:new Date(`${day}T${time}`),
      booker_email:booker_Email,
      booker_phone:bookerPhone,
      booker_first_name:bookerFirstName,
      booker_last_name:bookerLastName,
      booker_occasion:bookerOccasion,
      booker_request:bookerRequest,
      restaurant_id:restaurant.id 


    }

  })


  const bookingOnTablesData=tablesToBooks.map(table_id=>{
    return{
      table_id,
      booking_id:booking.id
    }
  })


  await prisma.bookingsOnTables.createMany({
    data: bookingOnTablesData
  })

  return new Response(
    JSON.stringify({
      hello: booking,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );

  // return new Response(
  //   JSON.stringify({
  //     payload: {

  //       booker_Email,
  //        bookerPhone,

  //       query: {
  //         slug,
  //         day,
  //         time,
  //         partySize,
  //       },
  //     },
  //   }),
  //   {
  //     status: 200,
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   }
  // );
}
