import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const ProtectedRoute = () => {
  const {user} = useAuth();
  // console.log(token);

  if(!user) {
    return <Navigate to="/"/>
  }

  return <Outlet/>
}