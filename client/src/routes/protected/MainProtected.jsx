import { Navigate, Outlet } from "react-router";

const MainProtected = () => {
  const token = localStorage.getItem("accessToken");

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default MainProtected;
