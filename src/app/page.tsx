import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen ">
      <main className="max-w-screen-2xl m-auto bg-white">
        {/* NAVBAR */}
        <nav className="bg-white p-2 flex justify-between">
          <a href="" className="font-bold text-gray-700 text-2xl">
            OpenTable
          </a>

          <div className="flex ">
            <button className="bg-blue-400 text-white rounded mr-3 p-1 px-4 ">
              Sign in
            </button>
            <button className="border rounded p-1 px-4">Sign up</button>
          </div>
        </nav>
        {/* NAVBAR */}
        {/* HEADER */}
        <div className="flex justify-center items-center  align- h-80 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
          <h1 className=" text-white text-7xl   ">Milestones Grill(Toronto)</h1>
        </div>

        {/* HEADER */}
        {/* DESCRIPTION PORTION */}
        <div className="flex w-2/3 m-auto -mt-10 rounded  ">
          <div className="w-[70%] border rounded   ">
            <nav  className="border-b text-reg p-2 bg-white">
            <a href="" className="mr-3">Overview</a>
            <a href="">Menu</a>
            </nav>
            <h2 className="text-5xl font-bold border-b p-4 " >
              Milesstone Grill
            </h2>
            <div className="flex mb-3 p-1">
              <p>*****</p>
              <p>600 Reviews</p>
             
            </div>
            <p className="p-1 text-lg">
              the classics you love prepared with a perfect twist, all served up
            in an atmosphere that feels just right. That’s the Milestones
            promise. So, whether you’re celebrating a milestone, making the most
            of Happy Hour or enjoying brunch with friends, you can be sure that
            every Milestones experience is a simple and perfectly memorable one.
              </p>
          </div>

        </div>

        {/* DESCRIPTION PORTION */}
      </main>
    </main>
  );
}
