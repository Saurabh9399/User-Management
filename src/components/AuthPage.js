import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { addAdmin } from "../utils/redux/adminSlice";

const AuthPage = () => {
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [errMessage, setErrMessage] = useState();
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSigInSignUpToggle = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const adminEmail = email.current.value;
          const adminPassword = password.current.value;
          const adminName = name.current.value;

          dispatch(addAdmin({ adminEmail, adminPassword, adminName }));
        })
        .catch((error) => {
          const errCode = error.code;
          const errMessage = error.message;

          setErrMessage(errCode + "-" + errMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log(userCredential);

          navigate("/dashboard");

          console.log("in login");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black bg-opacity-75 py-10 px-7 my-[10%] mx-auto right-0 left-0 rounded-lg"
      >
        <h2 className="text-white mb-5 text-2xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter name"
            className="p-1 my-2 w-full focus:outline-none rounded"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-1 my-2 w-full focus:outline-none rounded"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-1 my-2 w-full focus:outline-none rounded"
        />
        <p className="text-red-500">{errMessage}</p>
        <button
          className="p-1 w-full my-2 bg-red-700 color-white bg-brown rounded-lg"
          onClick={() => handleSubmit()}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-indigo-50 mt-4">
          {isSignIn ? " New to Netflix?" : "Already have account!"}{" "}
          <span
            className="text-blue-500 hover:underline"
            onClick={() => handleSigInSignUpToggle()}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>{" "}
          now
        </p>
      </form>
    </div>
  );
};

export default AuthPage;
