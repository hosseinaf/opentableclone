import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import Header from "./components/Header";
import RestaurantNavbar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import Reservation from "./components/Reservation";
import { PrismaClient, Review } from "@prisma/client";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews:Review[]
}
const fetchRestautantsBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews:true
    },
  });
  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestautantsBySlug(params.slug);
  return (
    <main className="flex">
      <div className="w-[70%] border rounded p-2   shadow ">
        <RestaurantNavbar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>

      <div className="w-[27%]   ">
        <Reservation />
      </div>
    </main>
  );
}
