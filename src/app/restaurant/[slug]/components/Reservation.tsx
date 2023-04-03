import React from 'react'

export default function 
() {
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
                <option value="">1 person</option>
                <option value="">2 people</option>
              </select>
            </div>
             {/* party size */}

            {/* DATA */}
            <div className="flex justify-between mt-3 ">
              <div className="border-b pb-2 w-[50%]" >
              <p >Date</p>
              </div>
             
              <div className="flex flex-col ">
                <label htmlFor="" className="font-bold ">
                  Time
                </label>
                <select name="" id="" className="mt-3 border-b pb-2">
                  <option value="">7:30 AM</option>
                  <option value="">9:30 AM</option>
                </select>
              </div>
            </div>
          
           
            <div className="mt-5">
              <button className="bg-red-600  w-full h-16 text-white rounded">Find a Time</button>

            </div>
            
          </div>
    </div>
  )
}
