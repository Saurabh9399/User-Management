import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserFlagAction,
  removeUser,
  storeEditID,
} from "../utils/redux/userSlice";

const UserList = ({ id, name, email, role }) => {
  const userArray = useSelector((store) => store.user.users);
  const dispatch = useDispatch();

  const handleDelete = () => {
    const removedUserArray = userArray.filter((item) => item.id !== id);
    dispatch(removeUser(removedUserArray));
  };
  const handleEdit = () => {
    dispatch(editUserFlagAction());
    dispatch(storeEditID(id));
    // const editUser = userArray.filter((item) => item.id !== id);
    // dispatch(removeUser(editUser));
  };
  return (
    <div>
      <li className="px-2 py-1 grid grid-cols-12 gap-2 text-gray-800">
        <div className="text-md md:row-span-3 md:col-start-2">{id}</div>
        <div className="md:col-start-4 md:col-span-2 text-md">{name}</div>
        <div className="w-[480%] overflow-hidden col-start-4 md:row-start-0 md:col-start-6 md:col-span-3 text-md">
          {email}
        </div>
        <div className="col-start-9 md:row-start-0 md:col-start-9 md:col-span-2 text-md">
          {role}
        </div>
        <button
          onClick={handleEdit}
          className="col-start-11 row-start-0 text-md font-bold hover:opacity-50"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="row-start-0 text-md text-red-600 font-bold hover:opacity-50"
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default UserList;
