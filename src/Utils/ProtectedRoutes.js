import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const isLogged = JSON.parse(localStorage.getItem("isLogged"));
  console.log(isLogged, "prot");
  return isLogged ? <Outlet /> : <Navigate to={"/login"} />;
}

export default ProtectedRoutes;
