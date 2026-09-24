import { Navigate, Outlet } from "react-router";

const PublicProtected = () => {
  const token = localStorage.getItem("accessToken");

  // console.log(token);
  
  return token ? <Navigate to="/main" replace /> : <Outlet />;
};

export default PublicProtected;