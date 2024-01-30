"use client";
import { useState, useRef, useEffect, SetStateAction } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

    <form className="max-w-sm mx-auto  bg-slate-950 hover:shadow-lg flex flex-col justify-center items-center py-12 mt-32  border-gray-400 rounded-lg p-8">
      <div>
        <h1 className="capitalize text-center font-bold text-xl mb-12">
          log in
        </h1>
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
      <button
        onClick={(e) => {
          e.preventDefault()
          signIn("credentials", {
            email,
            password,
            redirect: true,
            callbackUrl: "/",
          });
        }}
        disabled={!email || !password}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>

  );
}
