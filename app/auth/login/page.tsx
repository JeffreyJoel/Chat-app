"use client"
import React from "react";
import Link from 'next/link'

const YourComponent = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#000] ">
      <header>
        <h1 className="font-extrabold text-2xl p-6">
          Z_<span className="text-[#0000ff]">Breed</span>
        </h1>
      </header>
      <main className="flex flex-col items-center flex-grow p-24">
        <div className="mt-[25%] md:mt-[10%]">
          <h1 className="capitalize font-bold text-xl">get started</h1>
        </div>
        <div className="mt-5 w-full max-w-[440px] grid gap-x-3 gap-y-2 sm:grid-cols-2 sm:gap-y-0">
          <Link
            href="/login"
            className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]" data-testid="login-button">
              <div className="relative -top-[1px]">Log in</div>
          </Link>
          <Link
            href="/signup"
            className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]" data-testid="login-button">
              <div className="relative -top-[1px]">Sign Up</div>
          </Link>
        </div>
      </main>
      <footer className="p-4">
        <h1 className="text-center">Z_Breed</h1>
      </footer>
    </div>
  );
};

export default YourComponent;
