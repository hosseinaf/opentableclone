import { Button } from "@mui/material";
import React from "react";

export default function AuthModalInputs() {
  return (
    <div className="h-[600px]">
      <div className="flex justify-between mt-3">
        <input
          className="w-[49%]  px-2 py-3 border rounded"
          type="text"
          name="search"
          placeholder="First Name"
        />
        <input
          className="w-[49%]  px-2 py-3 border rounded"
          type="text"
          name="search"
          placeholder="Last Name"
        />
      </div>
      <div className="mt-3">
        <input
          className="w-full  px-2 py-3 border rounded"
          type="text"
          name="search"
          placeholder="Email"
        />
      </div>

      <div className="flex justify-between mt-3">
        <input
          className="w-[49%]  px-2 py-3 border rounded"
          type="text"
          name="search"
          placeholder="Phone"
        />
        <input
          className="w-[49%]  px-2 py-3 border rounded"
          type="text"
          name="search"
          placeholder="City"
        />
      </div>

      <div className="mt-3">
        <input
          className="w-full  px-2 py-3 border rounded"
          type="text"
          name="search"
          placeholder="Password"
        />
      </div>

      <div className="mt-3">
        <button className="w-full text-white bg-red-600 py-3 px-2 rounded" >SIGN IN</button>
      </div>
    </div>
  );
}
