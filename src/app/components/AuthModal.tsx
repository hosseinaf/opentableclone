"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "./AuthModalInputs";

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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signinContent: string, signupContent: string) => {
    return isSignIn ? signinContent : signupContent;
  };

  const handleChangeInput=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    })


  }

  const[inputs,setInputs]=useState({
    firstName:"hossein",
    lastName:"aflaki",
    email:"h@aflaki",
    phone:"0990999",
    city:"rsht",
    password:"1937"

  })

  return (
    <div>
      <button
        // className={`${isSignIn ? "bg-blue-400 text-white":""} border rounded p-1 px-4 mr-3`}
        className={`${renderContent(
          "bg-blue-400 text-white ",
          ""
        )}border rounded p-1 px-4 mr-3`}
        onClick={handleOpen}
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
         <div className="text-center font-bold border-b pb-2">
          {renderContent("Sign In","Create Account")}
          {inputs.email}
         </div>
         <div  >
          <h2 className="text-2xl text-center font-light mt-3">
            {renderContent("Log Into Your Account","Create Your OpenTable Account")}
          </h2>
          <AuthModalInputs inputs={inputs} handleChangeInput={handleChangeInput} isSignIn={isSignIn} />
         </div>
        </Box>
      </Modal>
    </div>
  );
}
