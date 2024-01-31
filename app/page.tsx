"use client";
import { useEffect, useState } from "react";
import ChatGptUi from "./ChatGptUi";
import { useSession } from "next-auth/react";
import "./page.css";
import YourComponent from "./auth/login/page";
import Loading from "./loading";
import { redirect } from "next/navigation";
const ChatComponent: React.FC = () => {
  const auth = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth/login");
    },
  });
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState(true);

  return (
    <div>
      {status === "loading" ? <Loading /> : <ChatGptUi />}
      {/* ) : ( */}

      {/* <YourComponent /> */}
      {/* )} */}
    </div>
  );
};

export default ChatComponent;
