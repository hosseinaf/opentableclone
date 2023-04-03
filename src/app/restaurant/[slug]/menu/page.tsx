import NavBar from "@/app/components/NavBar";
import Link from "next/link";
import Header from "../components/Header";
import RestaurantNavbar from "../components/RestaurantNavBar";
import MenuCom from "../components/MenuCom";

export default function Menu() {
  return (
    <>
      
      
        <div className="w-[100%] border rounded p-2 bg-white   shadow ">
          <RestaurantNavbar />
          <MenuCom />
        </div>
     
    </>
  );
}
