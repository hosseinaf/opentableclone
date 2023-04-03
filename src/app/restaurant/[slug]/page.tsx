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

export default function RestaurantDetails() {
  return (
    <main className="flex">
      <div className="w-[70%] border rounded p-2   shadow ">
        <RestaurantNavbar />
        <Title />
        <Rating />
        <Description />
        <Images />
        <Reviews />
      </div>

      <div className="w-[27%]   ">
        <Reservation />
      </div>
    </main>
  );
}
