import React, { useEffect, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig.js";
import { useDispatch } from "react-redux";
import { getName } from "../Redux/Auth/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = input;

  const textHandle = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const history = useNavigate();
  const dispatch = useDispatch();

  const signUpHandle = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(getName(name));
        history("/login");
        toast.success("Signup successful ", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  useEffect(() => {
    window.scroll(0, 215);
  }, []);

  const alertHandle = () => {
    if (name && email && password) {
    } else {
      toast.info("Please Fill the Inputs", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className="signupContainer">
        <form className="signUp" onClick={signUpHandle}>
          <h2 className=" text-center font-medium text-xl underline">SignUp</h2>
          <label
            htmlFor="input-group-1"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center  pointer-events-none"></div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={textHandle}
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name..."
            />
          </div>
          <label
            htmlFor="input-group-1"
            className=" mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={textHandle}
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-full rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
          <label
            htmlFor="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <div className="flex">
            <span className="inline-flex  items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
              🗝
            </span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={textHandle}
              id="website-admin"
              className="rounded-none rounded-r-lg bg-gray-50 border  text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="elonmusk"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 w-full border border-blue-700 rounded"
            onClick={alertHandle}
          >
            SignUp
            <ToastContainer />
          </button>
          <p className="text-center">
            Already have an account ?
            <Link to="/login">
              <span className=" px-2 text-sky-500 hover:text-sky-900">
                LogIn
              </span>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
