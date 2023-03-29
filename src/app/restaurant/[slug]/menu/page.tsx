import NavBar from "@/app/components/NavBar";
import Link from "next/link";

export default function Menu(){
    return(
        <main className="bg-gray-100 min-h-screen w-screen ">
    <main className="max-w-screen-2xl m-auto bg-white">
     <NavBar/>
      {/* HEADER */}
      <div className="flex justify-center items-center  align- h-80 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
        <h1 className=" text-white text-7xl   ">Milestones Grill(Toronto)</h1>
      </div>

      {/* HEADER */}

      <div className="flex w-2/3 m-auto -mt-10 rounded  ">
        <div className="w-[100%] border rounded p-2 bg-white   shadow ">
          {/* RESAURANT NAVBAR */}
          <nav className="border-b text-reg pb-2 ">
            <Link href="/restaurant/milestone-grill" className="mr-3">
              Overview
            </Link>
            <Link href="/restaurant/milestone-grill/menu">Menu</Link>
          </nav>
          {/* RESAURANT NAVBAR */}
          {/* MENU */}
          <div className="  p-4 ">
            <h2 className="font-bold text-2xl">Menu</h2>
          </div>
          <div className="border w-[40%] p-2 ">
            <h2 className="font-bold">Surf and Turf</h2>
            <p>A well done steak with lobster and rice</p>
            <p className="mt-4 font-bold">$80.00</p>
          </div>

          {/* MENU */}
        </div>
      </div>
    </main>
  </main>
    )
}