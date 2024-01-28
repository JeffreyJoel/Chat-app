import React from "react";

import "./globals.css"; // Make sure to import your global styles

const YourComponent = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <h1 className="font-extrabold text-2xl p-6">Z_<span className="text-[#0000ff]">Breed</span></h1>
      </header>
      <main className="flex flex-col items-center flex-grow p-24">
        <div className="mt-[25%]">
          <h1 className="capitalize font-bold text-xl">get started</h1>
        </div>
        <div className="mt-4">
          <button className="capitalize text-md font-semibold  bg-[#3c46ff] p-3 rounded-lg mr-2 px-20 hover:bg-[#0000ff]">login</button>
          <button className="capitalize text-md font-semibold  bg-[#3c46ff] p-3 rounded-lg mr-2 px-20  hover:bg-[#0000ff]">sign up</button>
        </div>
      </main>
      <footer className=" p-4">
        <h1 className="text-center">Z_Breed</h1>
      </footer>
    </div>
  );
};

export default YourComponent;
