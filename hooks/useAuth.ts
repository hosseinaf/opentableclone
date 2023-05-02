import { AuthenticationContext } from "@/app/context/AuthContext";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useContext } from "react";
 

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
  const signIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  },handleClose:()=>void) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      setCookie("jwt", response.data.token, { maxAge: 60 * 6 * 24 });
      console.log(response);
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });
      handleClose()
    } catch (error: any) {
      console.log(error.response.data.errorMessage);
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
    }
  };

  const signup = async () => {};

  return {
    signIn,
    signup,
  };
};
export default useAuth;
