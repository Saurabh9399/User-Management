import React, { useEffect, useState } from "react";
import Header from "./Header";
import AddUserModal from "./AddUserModal";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/redux/userSlice";
import Pagination from "./Pagination";
import EditModal from "./EditModal";

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
        <div className="w-[99%] h-1/2 z-20 py-2 px-4 m-2 flex justify-between rounded-lg bg-sky-100">
          <div className="text-2xl font-bold text-gray-600">Users List</div>
          <AddUserModal />
          <EditModal />
        </div>
        <div className="h-screen m-2 bg-sky-100 rounded-lg">
          <div className="h-5 px-2 grid grid-cols-12 gap-2 font-bold mb-6 mt-6 pt-6 pb-6">
            <div className="col-start-0 text-md md:row-span-3 md:col-start-2">
              Id
            </div>
            <div className="col-start-2 grid md:col-start-4 md:col-span-2 text-md">
              Username
            </div>
            <div className="col-start-5 md:row-start-0 md:col-start-6 md:col-span-3 text-md">
              Email
            </div>
            <div className="col-start-9 md:row-start-0 md:col-start-9 md:col-span-2 text-md">
              Role
            </div>
            <button className="col-start-11 row-start-0 text-md font-bold">
              Actions
            </button>
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
