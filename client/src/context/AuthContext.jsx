import { createContext } from "react";
import axios from "axios"

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const token = localStorage.getItem("accessToken");
  const parsed = JSON.parse(token);


  const loginUser = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
      );
      localStorage.setItem(
        "accessToken",
        JSON.stringify(res.data.data.accessToken),
      );

      console.log(res);

      return true;
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const registerUser = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        data,
      );
      localStorage.setItem(
        "accessToken",
        JSON.stringify(res.data.accessToken),
      );

      console.log(res);

      return true;
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  const logoutUser = async () => {
  try {
    await axios.post(
      "http://localhost:3000/api/auth/logout",
      {}, 
      {
        headers: {
          Authorization: `Bearer ${parsed}`,
        },
        withCredentials: true,
      }
    );

    localStorage.removeItem("accessToken");
    localStorage.clear();

    window.location.href = "/"; 

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
};

  return <AuthContext.Provider value={{ loginUser, registerUser, logoutUser }}>{children}</AuthContext.Provider>;
};
