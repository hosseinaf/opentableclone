import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavBar";
import MenuCom from "../components/MenuCom";
import { PrismaClient } from "@prisma/client";
import MenuCard from "../components/MenuCard";

const prisma = new PrismaClient();
const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select:{
      items:true
    }
  });

  if(!restaurant){
    throw new Error
  }
  return restaurant.items
} ;

export default async function ResturantMenu({
  params,
}: {
  params: { slug: string };
}) {
  const menu=await fetchRestaurantMenu(params.slug)
  
  return (
    <>
      <div className="w-[100%] border rounded p-2 bg-white   shadow ">
        <RestaurantNavbar slug={params.slug} />
       <MenuCom menu={menu} />  
          
      </div>
    </>
  );
}
