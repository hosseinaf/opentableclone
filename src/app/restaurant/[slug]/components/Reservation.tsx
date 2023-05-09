"use client";
import React, { useState } from "react";
import { partySize as PartySizes, times } from "../../../../../data";
import ReactDatePicker from "react-datepicker";

import { CircularProgress } from "@mui/material";
import useAvailabilities from "../../../../../hooks/useAvailabilties";
import Link from "next/link";
//import { times } from "../../../../../data/times";

export default function Reservation({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) {
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState("2");
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  console.log({ data });

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      //const  d=date.toISOString().split("T")[0]
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }
    return setSelectedDate(null);
  };

  const handleClick = () => {
    fetchAvailabilities({
      slug,
      day,
      time,
      partySize,
    });
  };

  const filterTimeByRestaurantOpenWindow = () => {
    //openTime=14:30:00.000Z 2:30PM
    //closeTime=21:30:00.000Z 9:30PM

    const timesWithInWindow: typeof times = [];
    let isWithinWindow = false;
    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }
      if (isWithinWindow) {
        timesWithInWindow.push(time);
      }
      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return timesWithInWindow;
  };

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
          <select
            name=""
            id=""
            className="mt-3 border-b pb-2"
            value={partySize}
            onChange={(e) => setPartySize(e.target.value)}
          >
            {PartySizes.map((size) => (
              <option value={size.value}>{size.label}</option>
            ))}
          </select>
        </div>
        {/* party size */}

        {/* DATA */}
        <div className="flex justify-between mt-3 ">
          <div className=" pb-2 w-[50%]">
            <p>Date</p>
            <ReactDatePicker
              selected={selectedDate}
              onChange={handleChangeDate}
              className="py-3 border-b font-light text-reg w-24 "
              dateFormat="MMMM d"
              wrapperClassName="w-[98%]"
            />
          </div>

          <div className="flex flex-col ">
            <label htmlFor="" className="font-bold ">
              Time
            </label>
            <select
              name=""
              id=""
              className="mt-3 border-b pb-2"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {filterTimeByRestaurantOpenWindow().map((time) => (
                <option value={time.time}>{time.displayTime}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <button
            className="bg-red-600  w-full h-16 text-white rounded disabled:bg-red-300"
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? <CircularProgress color="inherit" /> : "Find a Time"}
          </button>
        </div>
        {data && data.length ? (
          <div className="mt-4">
            <p className="text-reg">Select a Time</p>
            <div className="flex flex-wrap mt-2">
              {data.map((time) => {
                return time.available ? (
                  <Link
                    href={`/reserve/${slug}?data=${day}T${time.time}&partySize=${partySize}`}
                    className="bg-red-600 cursor-pointer  p-2 w-24 text-center text-white mb-3 rounded mr-3"
                  >
                    <p className="text-sm font-bold">{time.time}</p>
                  </Link>
                ) : (
                  <p className="bg-grey-300 p-2 w-24 mb-3 rounded mr-3"> );</p>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
