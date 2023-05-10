import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import Header from "./components/Header";
import Form from "./components/Form";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
  });
  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

export default async function Reserve({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { data: string; partySize: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <Header
            image={restaurant.main_image}
            name={restaurant.name}
            data={searchParams.data}
            partySize={searchParams.partySize}
          />
          <Form partySize={searchParams.partySize} 
          slug={params.slug}
          data={searchParams.data} 
          />
        </div>
      </div>
    </>
  );
}
