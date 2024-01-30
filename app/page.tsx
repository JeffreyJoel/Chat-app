"use client";
import { useEffect, useState } from "react";
import SideNavbar from "./SideBar";
import { useSession } from "next-auth/react";
import "./page.css";
import YourComponent from "./auth/login/page";
const ChatComponent: React.FC = () => {
  const { data: session, status } = useSession();

  // if (status === "authenticated") {
  //   return (
  //     <div className=" align-middle  bg-[#343541] ">
  //       <SideNavbar />{" "}
  //     </div>
  //   );
  // }

  // return <YourComponent />;

  return (
    <div className="">
      {/* <div className="align-middle bg-[#343541]"> */}
      {status === "authenticated" ? (
        // <div className="bg-[#343541] align-middle">
        <SideNavbar />
        // </div>
      ) : (
        // <div className="">
          <YourComponent />
        // </div>
      )}
      {/* </div> */}
    </div>
  );
};

export default ChatComponent;
