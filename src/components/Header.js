import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAdmin, removeAdmin } from "../utils/redux/adminSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [admin, setAdmin] = useState(null);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdmin(user);
        const { email, password } = user;
        dispatch(
          addAdmin({
            email: email,
            password: password,
          })
        );
        navigate("/dashboard");
      } else {
        dispatch(removeAdmin());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="h-[5%] w-full px-8 py-2 bg-gray-200 flex justify-between items-center">
      <div className="text-gray-800 font-bold flex cursor-pointer">
        {!admin ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        )}
      </div>

      <div
        className="cursor-pointer font-bold text-gray-600"
        onClick={handleSignout}
      >
        {admin && "Sign out"}
      </div>
    </div>
  );
};

export default Header;
