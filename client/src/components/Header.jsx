import { Link } from "react-router-dom";

const Header = () => {
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
          <Link to="/Log In">
            <li className="text-stone-800 hover:underline">Log In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
