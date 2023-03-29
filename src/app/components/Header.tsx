"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function(){
    const [location, setLocation] = useState("");
  const router = useRouter();
    return(
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
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              />
              <button
                className="bg-red-600 rounded py-2 px-9  text-white"
                onClick={() => {
                  if (location === "banana") return;
                  router.push("search");
                }}
              >
                Let's go
              </button>
            </div>
            {/* SEARCHBAR */}
          </div>
          {/* HEADER */}
        </main>
    )
}