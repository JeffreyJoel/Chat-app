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

  return (
    <div>
    {status === 'loading' ? (
   
      <Loading/>
    ) : status === 'authenticated' ? (

      <SideNavbar />
    ) : (
      
      <YourComponent />
    )}
  </div>
  );
};

export default ChatComponent;
