"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
 
 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const[location,setLocation]=useState("");
  const router=useRouter();
 
  return (
    <main className="bg-gray-100 min-h-screen w-screen ">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
      <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
              OpenTable
            </Link>

        <div className="flex ">
          <button className="bg-blue-400 text-white rounded mr-3 p-1 px-4 ">
            Sign in
          </button>
          <button className="border rounded p-1 px-4">Sign up</button>
        </div>
      </nav>
      {/* NAVBAR */}
      <main>
        {/* HEADER */}
        <div className="h-64  bg-gradient-to-r from-[#0f1f47] to-[#5f6984]  p-2">
          <h1 className="text-white font-bold text-5xl mb-2 text-center">
            Find your table for any occasion
          </h1>

          {/* SEARCHBAR */}
          <div className=" text-left py-3 text-lg flex justify-center">
            <input
              className="rounded p-2 w-[450px] mr-3 "
              type="text"
              placeholder="State, city or town"
              value={location}
              onChange={(e)=>{setLocation(e.target.value)}}
              
            />
            <button className="bg-red-600 rounded py-2 px-9  text-white" onClick={()=>{
              if(location==="banana")return;
              router.push("search")
            }}
            

              >
              Let's go
            </button>
          </div>

          {/* SEARCHBAR */}
        </div>
        {/* HEADER */}
        {/* Cards */}
        <div className=" flex px-36 py-10">
          {/* card */}
          <Link href="/restaurant/milestones-grill">
          <div className="w-64 h-72  overflow-hidden cursor-pointer border">
            <img src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg" className="w-full h-36"></img>
            <h2 className="p-1 font-bold">Milestones Grill</h2>
            <div className="flex items-start">
              <div className="mb-2">*****</div>
              <p className="ml-2">77 reviews</p>
            </div>
            <div className="flex text-reg font-light capitalize">
              <h2 className="mr-3">Mexican</h2>
              <p className="mr-3">$$$$</p>
              <p>Toronto</p>
            </div>

            <p className="text-small mt-1 font-bold  ">Book 3 times today</p>
          </div>
          </Link>
          {/* card */}
        </div>
        {/* Cards */}
      </main>
    </main>
  </main>
  );
}
