import Link from "next/link";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient } from "@prisma/client";
import { type } from "os";
import Price from "../components/Price";

const prisma = new PrismaClient();
const fetchRestaurantByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };


  if (!city) return prisma.restaurant.findMany({ select });

  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select: {
      id: true,
      name: true,
      main_image: true,
      price: true,
      cuisine: true,
      location: true,
      slug: true,
    },
  });
};

const fetchByLocation= async()=>{
  const location=await prisma.location.findMany({
  
  })
    
  return location;
}

const fetchByCuisine=async()=>{
  const cuisine=await prisma.cuisine.findMany({
   
  })
    
  return cuisine;
}

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantByCity(searchParams.city);
  const location=await fetchByLocation();
  const cuisine=await fetchByCuisine();
  return (
    <>
      <Header />

      <div className="flex py-4 m-auto w-2/3 justify-between items-start  ">
        <SearchSideBar locations={location} cuisines={cuisine} />
        <div className="flex flex-wrap">
          {restaurants.length ? (
            <>
              {restaurants.map((items) => (
                <RestaurantCard restaurant={items} key={items.id}/>
              ))}
            </>
          ) : (
            <p>Sorry,we found no restaurants in this area </p>
          )}
        </div>
      </div>
    </>
  );
}
