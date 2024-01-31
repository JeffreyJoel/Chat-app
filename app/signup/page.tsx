"use client";
import { useState, useRef, useEffect, SetStateAction } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import Image from "next/image";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState();

  const handleConfirmPasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setConfirmPassword(e.target.value);
    setPasswordsMatch(password === e.target.value);
  };
  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === confirmPassword);
  };

  const signup = async () => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user.uid);

      await setDoc(doc(db, "users", res.user.uid), {
        email: email,
        username: email,
      });
      signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error:any) {
      console.log(error.message);
      
      setError(error.message || "")
    }
  };

  return (
    <form className="max-w-sm mx-auto bg-slate-950 hover:shadow-lg flex flex-col justify-center items-center py-12 mt-10 border-2  border-gray-600 rounded-lg p-8">
      <div className="mb-5  ">
        <div>
          <h1 className=" capitalize text-center font-bold text-xl mb-12">
            sign up
          </h1>
        </div>
        <div
          className="flex align-middle items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 focus:ring-4 focus:ring-grey-300 bg-gray-900 hover:bg-gray-800 hover:border-2 hover:border-slate-300 active:border-2 active:border-slate-500 cursor-pointer"
          onClick={(e) => {
            signIn("google", {
              callbackUrl: "/",
            });
          }}
        >
          <Image
            src="/logo-google.png"
            alt="Google Logo"
            width={20}
            height={20}
            className="h-5 mr-2"
          />
          Sign in with Google
        </div>
        <div className=" text-center mb-3">
          <p className="mx-4 text-grey-600">or</p>
        </div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium  dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-black border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder="name@flowbite.com"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium  dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          onChange={handlePasswordChange}
          className="shadow-sm bg-black border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium  dark:text-white"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="repeat-password"
          name="confirmPassword"
          autoComplete="current-password"
          onChange={handleConfirmPasswordChange}
          className={`bg-gray-50 border ${
            passwordsMatch ? "border-gray-300" : "border-red-500"
          } shadow-sm bg-black border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light`}
          required
        />
        {!passwordsMatch || error&& (
          <p className="text-red-500 text-sm mt-1">{error || "Passwords do not match"}</p>
        )}
      </div>
      <div className="flex items-start mb-5">
        <div>
          <p className="text-sm tracking-wider">
            Already have an account?{" "}
            <Link href="/login" className=" text-blue-400 hover:text-blue-200">
              Login
            </Link>
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={
          !email ||
          !password ||
          !confirmPassword ||
          password !== confirmPassword
        }
        onClick={(e) => {
          e.preventDefault();
          signup();
        }}
      >
        Register new account
      </button>
    </form>
  );
}
