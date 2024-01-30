"use client";
import { useEffect, useState } from "react";
import SideNavbar from "./SideBar";
import { useSession } from "next-auth/react";
import "./page.css";
import YourComponent from "./auth/login/page";
import Loading from "./loading";
const ChatComponent: React.FC = () => {
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(true);


  // if (status === "authenticated") {
  //   return (
  //     <div className=" align-middle  bg-[#343541] ">
  //       <SideNavbar />{" "}
  //     </div>
  //   );
  // }

  // return <YourComponent />;

  return (
    <div>
    {status === 'loading' ? (
      // Render a loading indicator or message while checking authentication
      <Loading/>
    ) : status === 'authenticated' ? (
      // Render the SideNavbar component if authenticated
      <SideNavbar />
    ) : (
      // Render the YourComponent component if not authenticated
      <YourComponent />
    )}
  </div>
  );
};

export default ChatComponent;
