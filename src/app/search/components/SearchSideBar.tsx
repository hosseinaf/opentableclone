import { Cuisine, Location, PRICE, PrismaClient } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {


 const prices=[{
  price:PRICE.CHEAP,
  label:"$",
  className:"border w-full text-reg font-light text-center rounded-l p-2"

 },{ price:PRICE.REGULAR,
  label:"$$",className:"border w-full text-reg font-light text-center  p-2"},{ price:PRICE.EXPENSIVE,
    label:"$$$",className:"border w-full text-reg font-light text-center rounded-r p-2"} ]

  return (
    <main>
      <div className="w-2/5 ">
        <div className="border-b pb-4">
          <h1 className="mb-2">Region</h1>

          {locations.map((item) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  city: item.name,
                },
              }}
              className="font-light text-reg"
              key={item.id}
            >
              {" "}
              {item.name}
            </Link>
          ))}
        </div>
        <div className="border-b pb-4 mt-3 flex flex-col">
          <h1 className="mb-2">Cuisine</h1>
          {cuisines.map((item) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  cuisine : item.name,
                },
              }}
              className="font-light text-reg"
              key={item.id}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="mt-3 pb-4">
          <h1 className="mb-2">Price</h1>
          <div className="flex">


            {
              prices.map(item=>(
                <Link     href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    price:item.price,
                  },
                }} className={item.className}>
                {item.label}
              </Link>
              ))
            }
          
          </div>
        </div>
      </div>
    </main>
  );
}
