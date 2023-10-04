import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddUserModal from "./AddUserModal";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import Pagination from "./Pagination";

const Dashboard = () => {
  const userArray = useSelector((store) => store.user?.users);
  const [userData, setUserData] = useState([]);

  const dispatch = useDispatch();

  const getUserData = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();
    setUserData(json.users);
    console.log("json data", json);
  };

  const formatDataFunction = () => {
    userData.forEach((user) => {
      let obj = {
        id: user.id,
        name: user.firstName,
        email: user.email,
        role: "User",
      };
      console.log("obj", obj);
      dispatch(addUser(obj));
    });
  };
  useEffect(() => {
    getUserData();
    if (userArray.length === 0) {
      formatDataFunction();
    }
  }, []);

  return (
    <>
      <div className="">
        <Header />
        <div className="border-2 border-gray-300 w-[99%] h-1/2 z-20 py-2 px-4 m-2 flex justify-between rounded-lg">
          <div className="text-2xl font-bold text-gray-600">Users List</div>
          <AddUserModal />
        </div>
        <div className="h-screen border-2 border-gray-300 m-2">
          <div className="h-5 px-2 grid grid-cols-12 gap-2 font-bold mb-6">
            <div className="row-start-0 col-start-2 row-span-3 text-md">Id</div>
            <div className="grid col-start-4 col-span-2 text-md">Username</div>
            <div className="row-start-0 col-start-6 col-span-3 text-md">
              Email
            </div>
            <div className="row-start-0 col-start-9 col-span-2 text-md">
              Role
            </div>
            <button className="row-start-0 text-md font-bold">Actions</button>
          </div>
          <div className="h-full m-2">
            <Pagination items={userArray} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
