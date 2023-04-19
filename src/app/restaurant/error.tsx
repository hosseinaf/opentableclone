"use client";
import Image from "next/image";
import errorMascot from "../../../public/icons/icons/error.png";

export default function Error({error}:{error:Error}) {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center" >
      <Image src={errorMascot} className="w-56 mb-8"  alt=""></Image>
      <div className="bg-white p-10 py-14  shadow rounded ">
        <h1 className="font-bold text-2xl">Well, this is embarrasing</h1>
        <h3 className="font-bold text-xs ">{error.message}</h3>
        <p className="mt-5 font-light">Error Code: 400</p>
      </div>
     </div>
  )
}
