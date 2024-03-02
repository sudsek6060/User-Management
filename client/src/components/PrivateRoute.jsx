import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const { currentuser } = useSelector((state) => state.user);
  console.log(currentuser.role);
  return currentuser ? <Outlet /> : <Navigate to="/logIn" />;
};

export default PrivateRoute;
