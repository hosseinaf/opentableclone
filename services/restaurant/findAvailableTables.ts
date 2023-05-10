import { PrismaClient, Table } from "@prisma/client";
import { times } from "../../data";

const prisma = new PrismaClient();

export const findAvailableTables = async ({
  time,
  day,
  restaurant,
}: {
  time: string;
  day: string;
  restaurant: {
    table: Table[];
    open_time: string;
    close_time: string;
  };
}) => {
  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes) {
    // return new Response(
    //   JSON.stringify({
    //     hello: "Invalid data provider",
    //   }),
    //   {
    //     status: 400,
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //   }
    // );
     throw new Error("Invalid data provider")
  }

  const booking = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      number_of_people: true,
      booking_time: true,
      tables: true,
    },
  });

  const bookingTablesObj: { [key: string]: { [key: number]: true } } = {};

  booking.forEach((booking) => {
    bookingTablesObj[booking.booking_time.toISOString()] =
      booking.tables.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      }, {});
  });

  const tables = restaurant.table;

  const searchTimesWithTable = searchTimes.map((searchTimes) => {
    return {
      date: new Date(`${day}T${searchTimes}`),
      time: searchTimes,
      tables: tables,
    };
  });

  searchTimesWithTable.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTablesObj[t.date.toISOString()]) {
        if (bookingTablesObj[t.date.toISOString()][table.id]) return false;
      }

      return true;
    });
  });
  return searchTimesWithTable;
};
