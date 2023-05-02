import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

export default function AuthModalInputs({
  inputs,
  handleChangeInput,
  isSignIn,
}: Props) {
  const [disabled, setDisabled] = useState(true);
  const { signin } = useAuth();

  useEffect(() => {
    if (isSignIn) {
      if (inputs.password && inputs.email) {
        return setDisabled(false);
      }
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.email &&
        inputs.password &&
        inputs.password
      ) {
        return setDisabled(false);
      }
    }
    setDisabled(true);
  }, [inputs]);

  const handleClick = () => {
    if (isSignIn) {
      signin({ email: inputs.email, password: inputs.password });
    }
  };
  return (
    <div className="h-[600px]">
      {isSignIn ? null : (
        <div className="flex justify-between mt-3">
          <input
            className="w-[49%]  px-2 py-3 border rounded"
            type="text"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            className="w-[49%]  px-2 py-3 border rounded"
            type="text"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}
      <div className="mt-3">
        <input
          className="w-full  px-2 py-3 border rounded"
          type="text"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>

      {isSignIn ? null : (
        <div className="flex justify-between mt-3">
          <input
            className="w-[49%]  px-2 py-3 border rounded"
            type="text"
            placeholder="Phone"
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
          />
          <input
            className="w-[49%]  px-2 py-3 border rounded"
            type="text"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInput}
            name="city"
          />
        </div>
      )}

      <div className="mt-3">
        <input
          className="w-full  px-2 py-3 border rounded"
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
          name="password"
        />
      </div>

      <div className="mt-3">
        <button
          className="w-full text-white bg-red-600 py-3 px-2 rounded disabled:bg-gray-400"
          disabled={disabled}
          onClick={handleClick}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
}
