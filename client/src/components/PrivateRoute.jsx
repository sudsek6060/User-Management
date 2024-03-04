import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const { currentuser } = useSelector((state) => state.user);

  return currentuser.role == "admin" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
