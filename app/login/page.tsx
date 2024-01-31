"use client";
import { useState, useRef, useEffect, SetStateAction } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const handleSignIn = () => {
    try {
      signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form className="max-w-sm mx-auto w-[90%] bg-slate-950 hover:shadow-lg flex flex-col justify-center items-center py-12 mt-14 border-2 border-gray-600 rounded-lg p-8">
      <div>
        <h1 className="capitalize text-center font-bold text-xl mb-12">
          log in
        </h1>
      </div>
      <div
        className="flex align-middle items-center justify-center w-[90%] py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 focus:ring-4 focus:ring-grey-300 bg-gray-900 hover:bg-gray-800 hover:border-2 hover:border-slate-300 active:border-2 active:border-slate-500 cursor-pointer"
        onClick={() => {
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
        Log in with Google
      </div>
      <div className=" items-center mb-3">
        <p className="mx-4 text-grey-600">or</p>
      </div>

      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@flowbite.com"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div>
        <p className="text-sm mb-4 tracking-wide">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-400 hover:text-blue-200">
            Sign up
          </Link>
        </p>
      </div>
      <div className="w-[90%]">
        <button
          onClick={(e) => {
            e.preventDefault(); 
            handleSignIn();
          }}
          disabled={!email || !password}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        {error && (
          <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
        )}
      </div>
    </form>
  );
}
