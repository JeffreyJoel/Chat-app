"use client";
import { useEffect, useState } from "react";
import ChatGptUi from "./ChatGptUi";
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

      <ChatGptUi />
    ) : (
      
      <YourComponent />
    )}
  </div>
  );
};

export default ChatComponent;
