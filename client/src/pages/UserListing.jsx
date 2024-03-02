import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const UserListing = () => {
  const [showListingErrors, setShowListingErrors] = useState(false);
  const [userListings, setUserListings] = useState([]);
  console.log(userListings);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const res = await fetch("/api/user/get-user-listings");
        const data = await res.json();
        if (data.success === false) {
          setShowListingErrors(true);
        }
        setUserListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserList();
  }, []);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-8 mx-auto mt-4">
        <h1 className="text-2xl font-bold text-slate-800 mt-2">
          Create New User
        </h1>
        <button className="bg-orange-500 p-4 text-white font-semibold text-xl rounded-lg">
          Create user
        </button>
      </div>
      <div>
        <h1 className="text-gray-700 text-center font-bold text-2xl">
          User List
        </h1>

        <div className="flex flex-wrap gap-4 max-w-[90%] mx-auto">
          {userListings &&
            userListings.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
      </div>
    </div>
  );
};

export default UserListing;
