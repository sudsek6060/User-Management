import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  logOutUserFailure,
  logOutUserStart,
  logOutUserSuccess,
} from "../redux/user/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const { currentuser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      dispatch(logOutUserStart());
      const res = await fetch("/api/auth/signout");
      const data = await res.json();

      if (data.success === false) {
        dispatch(logOutUserFailure(data.message));
        return;
      }
      dispatch(logOutUserSuccess(data));
      navigate("/logIn");
    } catch (error) {
      dispatch(logOutUserFailure(error.message));
    }
  };
  return (
    <header className="bg-gradient-to-r from-gray-200 to-indigo-900 text-base sm:text-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-2xl flex flex-wrap">
            <span className="text-indigo-400">User</span>
            <span className="text-gray-600">Manage</span>
          </h1>
        </Link>

        <ul className="flex gap-3 text-gray-300 ">
          <Link to="/">
            <li className="hidden sm:inline text-stone-800 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="hidden sm:inline text-stone-800 hover:underline">
              About
            </li>
          </Link>
          {currentuser && currentuser.role === "admin" && (
            <Link to="/user-listings">
              <li className="text-stone-800 hover:underline">UserListings</li>
            </Link>
          )}

          {currentuser ? (
            <li
              onClick={handleLogOut}
              className="text-stone-800 hover:underline"
            >
              Log Out
            </li>
          ) : (
            <Link to="/LogIn">
              <li className="text-stone-800 hover:underline">Log In</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
