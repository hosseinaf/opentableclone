"use client";
import React, { useState } from "react";
import { partySize,times } from "../../../../../data";
import ReactDatePicker from "react-datepicker";
//import { times } from "../../../../../data/times";

export default function Reservation ({openTime,closeTime}:{openTime:string,closeTime:string}) {
  const[selectedDate,setSelectedDate]=useState<Date | null>(new Date())

  const handleChangeDate=(date:Date |null)=>{
     if(date){
      return setSelectedDate(date)

     }
     return setSelectedDate(null)
  }


  const filterTimeByRestaurantOpenWindow=()=>{
    //openTime=14:30:00.000Z 2:30PM
    //closeTime=21:30:00.000Z 9:30PM

    const timesWithInWindow:typeof times =[]
    let isWithinWindow=false;
    times.forEach(time=>{
      if(time.time===openTime){ 
        isWithinWindow=true;

      }
      if(isWithinWindow){
        timesWithInWindow.push(time)

      }
      if(time.time===closeTime){
        isWithinWindow=false;
      }

    })

    return timesWithInWindow

  }

  return (
    <div>
      <div className="w-[85%] bg-white mx-auto border rounded p-4">
        <p className="  border-b font-bold text-center pb-4  ">
          Make a Reservation
        </p>

        {/* party size */}
        <div className="flex flex-col">
          <label htmlFor="" className="font-bold p-1">
            Party size
          </label>
          <select name="" id="" className="mt-3 border-b pb-2">
            {partySize.map((size) => (
              <option value={size.value}>{size.label}</option>
            ))}
          </select>
        </div>
        {/* party size */}

        {/* DATA */}
        <div className="flex justify-between mt-3 ">
          <div className=" pb-2 w-[50%]">
            <p>Date</p>
            <ReactDatePicker selected={selectedDate} onChange={handleChangeDate} className="py-3 border-b font-light text-reg w-24 " dateFormat="MMMM d" wrapperClassName="w-[98%]" />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="" className="font-bold ">
              Time
            </label>
            <select name="" id="" className="mt-3 border-b pb-2">
               
              {
                filterTimeByRestaurantOpenWindow().map(time=>(
                  <option value={time.time}>{time.displayTime}</option>
                ))
              }
            </select>
          </div>
        </div>

        <div className="mt-5">
          <button className="bg-red-600  w-full h-16 text-white rounded">
            Find a Time
          </button>
        </div>
      </div>
    </div>
  );
}
