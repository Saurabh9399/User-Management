import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/redux/userSlice";

const UserList = ({ id, name, email, role }) => {
  const userArray = useSelector((store) => store.user.users);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    const editUser = userArray.filter((item) => item.id !== id);
    dispatch(removeUser(editUser));
  };
  const handleEdit = (e) => {
    // const editUser = userArray.filter((item) => item.id !== id);
    // dispatch(removeUser(editUser));
  };
  return (
    <div>
      <li className="px-2 py-1 grid grid-cols-12 gap-2">
        <div className="row-start-0 col-start-2 row-span-3 text-md">{id}</div>
        <div className="col-start-4 col-span-2 text-md">{name}</div>
        <div className="row-start-0 col-start-6 col-span-3 text-md">
          {email}
        </div>
        <div className="row-start-0 col-start-9 col-span-2 text-md">{role}</div>
        <button onClick={handleEdit} className="row-start-0 text-md font-bold">
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="row-start-0 text-md text-red-600 font-bold"
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default UserList;
