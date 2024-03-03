/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const UserCard = ({ user, handleDelete }) => {
  return (
    <>
      <div className="flex flex-col text-white max-w-[250px] rounded-lg p-8 bg-slate-700 ">
        <h1>Name:- {user.username}</h1>
        <h3>Email:- {user.email}</h3>
        <div className="flex gap-4">
          <p>age :- {user.age}</p>
          <p>gender :- {user.gender}</p>
        </div>
        <div className="flex justify-between mt-3">
          <Link to={`/edit-user/${user._id}`}>
            <button className="bg-green-400 p-2 rounded-md">Update</button>
          </Link>
          {user.role !== "admin" ? (
            <button
              onClick={() => handleDelete(user._id)}
              className="bg-red-500 p-2 rounded-md"
            >
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default UserCard;
