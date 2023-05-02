"use client";
import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";
import { AuthenticationContext } from "../context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
   const{error,loading,data,setAuthState}=useContext(AuthenticationContext)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {signIn} = useAuth();
   
  const renderContent = (signinContent: string, signupContent: string) => {
    return isSignIn ? signinContent : signupContent;
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    firstName: "hossein",
    lastName: "aflaki",
    email: "lebrodwdssn@hotddmail.com",
    phone: "0990999",
    city: "rsht",
    password: "paSsword432!!!1",
  });
  const [disabled, setDisabled] = useState(true);
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
        inputs.phone &&
        inputs.city &&
        inputs.password
      ) {
        return setDisabled(false);
      }
    }
    setDisabled(true);
  }, [inputs]);
 

  //click for sign in and sign up button
 const handleClick = () => {
  if (isSignIn) {
    signIn({ email: inputs.email, password: inputs.password },handleClose);
  }
  
};

  return (
    <div>
      <button
        // className={`${isSignIn ? "bg-blue-400 text-white":""} border rounded p-1 px-4 mr-3`}
        className={`${renderContent(
          "bg-blue-400 text-white ",
          ""
        )}border rounded p-1 px-4 mr-3   `}
        onClick={handleOpen}
        // disabled={disabled}
      >
        {/* {isSignIn?"Sign in":"Sign out"} */}
        {renderContent("Sign in", "Sign up")}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <div className="py-24 px-2 h-[600px] flex justify-center">
              {" "}
              <CircularProgress />
            </div>
          ) : (
            <div>
              {error ? (
                <Alert className="mb-4" severity="error">
                  {error}
                </Alert>
              ) : null}

              <div className="text-center font-bold border-b pb-2">
                {renderContent("Sign In", "Create Account")}
                {/* {inputs.email} */}
              </div>
              <div>
                <h2 className="text-2xl text-center font-light mt-3">
                  {renderContent(
                    "Log Into Your Account",
                    "Create Your OpenTable Account"
                  )}
                </h2>
                <AuthModalInputs
                  inputs={inputs}
                  handleChangeInput={handleChangeInput}
                  isSignIn={isSignIn}
                />
                <button
                  className="w-full text-white bg-red-600 py-3 px-2 rounded disabled:bg-gray-400"
                  disabled={disabled}
                  onClick={handleClick}
                >
                  {renderContent("Sign In", "Create Account")}
                </button>
          
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
