/* eslint-disable react/prop-types */

const UserCard = ({ user }) => {
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
          <button className="bg-green-400 p-2 rounded-md">Update</button>
          <button className="bg-red-500 p-2 rounded-md">Delete</button>
        </div>
      </div>
    </>
  );
};

export default UserCard;
