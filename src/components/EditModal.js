import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  editUser,
  editUserFlagAction,
} from "../utils/redux/userSlice";
import { v4 as uuidv4 } from "uuid";

const EditModal = () => {
  const showModal = useSelector((store) => store.user.editUserFlag);
  const userArray = useSelector((store) => store.user.users);
  // const editArray = useSelector((store) => store.user.users);
  const editId = useSelector((store) => store.user.editID);
  const editData = userArray.filter((item) => item.id === editId);
  const dispatch = useDispatch();
  const [name, setName] = useState(editData[0]?.name);
  const [email, setEmail] = useState(editData[0]?.email);
  const [role, setRole] = useState(editData[0]?.role);

  console.log("editData", editData, editData.name, role, name, email);
  const handleSubmit = () => {
    // let editObj = {
    //   name: name,
    //   email: email,
    //   role: role,
    // };
    // editArray.map((todo) => {
    //   console.log(todo.id === editId ? { todo, ...editObj } : todo);
    // });

    // console.log(editObj);

    // dispatch(editUser(userArray));
  };
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    console.log("RoleChange", e.target.value, role);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log("changeName", e.target.value, name);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("changeEmail", e.target.value, email);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Edit User Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => dispatch(editUserFlagAction())}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form
                    className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <label className="block text-black text-sm font-bold mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      value={name}
                      onChange={(e) => {
                        console.log(e.target.value);
                        handleNameChange(e);
                      }}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Email
                    </label>
                    <input
                      value={email}
                      type="text"
                      name="email"
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      onChange={(e) => {
                        console.log(e.target.value);
                        handleEmailChange(e);
                      }}
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      Role
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={role}
                      className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                      onChange={(e) => {
                        console.log(e.target.value);
                        handleRoleChange(e);
                      }}
                    />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => dispatch(editUserFlagAction())}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => {
                      dispatch(editUserFlagAction());
                      handleSubmit();
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditModal;
