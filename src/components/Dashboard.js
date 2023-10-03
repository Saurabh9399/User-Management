import React from "react";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="border-2 border-sky-500 w-[99%] h-1/2 z-20 py-2 px-4 m-2 flex justify-between">
        <div className="text-2xl font-bold text-gray-600">Users List</div>
        <button className="bg-black text-white p-2 rounded-xl flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 inline mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add New User
        </button>
      </div>
      <div className="h-screen border-2 border-sky-500 m-2">
        <div className="border-2 border-green-500 h-5 m-1 px-2 py-1 flex justify-around items-center font-bold">
          <div>Id</div>
          <div>Username</div>
          <div>Email</div>
          <div>role</div>
          <button>Edit User</button>
        </div>
        <div className="border-2 border-red-500 h-full m-2">
          <li className="px-2 py-1 flex justify-around items-center">
            <div>1</div>
            <div>Username</div>
            <div>Email</div>
            <div>role</div>
            <button onClick="">Edit</button>
          </li>
          <li className="px-2 py-1 flex justify-around items-center">
            <div>2</div>
            <div>Username</div>
            <div>Email</div>
            <div>role</div>
            <button>Edit</button>
          </li>{" "}
          <li className="px-2 py-1 flex justify-around items-center">
            <div>3</div>
            <div>Username</div>
            <div>Email</div>
            <div>role</div>
            <button>Edit</button>
          </li>
          {/* <li>User1</li>
          <li>User1</li> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
