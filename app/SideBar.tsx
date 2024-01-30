import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./page.css"

const ChatGPTUI = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Add your logic for sending a message
  };
  const handleUserInput = () => {
    if (input.trim() === "") return;

    // Add user message to the conversation
    setMessages([...messages, { text: input, isUser: true }]);
    setInput(""); // Clear the input field

    // Simulate GPT response (replace this with actual API call)
    setTimeout(() => {
      const gptResponse = "I'm a GPT-powered chatbot!";
      setMessages([...messages, { text: gptResponse, isUser: false }]);
    }, 500);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sm:relative max-h-[100vh]">
      <div
        className={`${
          isSidebarOpen ? "z-20 w-1/2 absolute md:relative lg:relative md:w-48 lg:w-60 min-h-screen" : "hidden"
        } bg-black text-white p-4 transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div className=" sticky  bg-black ">
          <div className="flex justify-between">
            <div>
            <h1>Z_Breed</h1>
          </div>
          <div>
            <div className="mt-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-md"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          
          </div>
        </div>
        <div className="overflow-container overflow-y-scroll h-[550px]">
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem alias vitae commodi natus esse eos non autem. Rerum dolorem perferendis cumque eius! Quam nemo nulla, eligendi omnis aliquid tenetur.</h1>
        </div>
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem alias vitae commodi natus esse eos non autem. Rerum dolorem perferendis cumque eius! Quam nemo nulla, eligendi omnis aliquid tenetur.</h1>
        </div>
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem alias vitae commodi natus esse eos non autem. Rerum dolorem perferendis cumque eius! Quam nemo nulla, eligendi omnis aliquid tenetur.</h1>
        </div>
        <var><var>d <div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae exercitationem alias vitae commodi natus esse eos non autem. Rerum dolorem perferendis cumque eius! Quam nemo nulla, eligendi omnis aliquid tenetur.</h1>
        </div></var></var>
      </div>
      <div className="text-center mt-4">
        <h1>Login</h1>
      <button className="bg-transparent border border-gray-400 p-2 rounded-md">Follow</button>
      </div>
      </div>
    
      {/* Main Content */}
      <div  className={`${
          isSidebarOpen ? " text-center p-4 md:absolute mx-auto md:right-0 top-0 md:w-[75%]  lg:w-[80%]" : "md:absolute p-4 w-full relative  "
        }`}>
        {/* Header with Hamburger Icon */}
        <div className="flex items-center justify-between mb-4 px-4">
          
          <h2 className="text-xl font-semibold">Chat with GPT</h2>
          <div>
          <GiHamburgerMenu
            className="cursor-pointer text-2xl"
            onClick={toggleSidebar}
          />
          </div>
        </div> 
        <div className="overflow-container max-h-[70vh] overflow-y-scroll max-w-[600px] p-4 mx-auto">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sit harum quia soluta fugiat. Neque quisquam deserunt ea rem, ipsum, laudantium, dolorum harum nam hic praesentium quas excepturi tempore deleniti.lorem</p>
          </div>
    </div>
    
    
    <div className=  {`${isSidebarOpen ? "relative md:absolute left-0 right-[-22%] lg:bottom md:top-[84vh] top-[33rem]  mx-auto w-[60%]" : "right-0 relative md:absolute left-0  lg:bottom md:top-[84vh] top-[33rem]  mx-auto w-[60%]"
        }`}>
      <div className=" w-full items-center">
        <div className="overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full dark:border-token-border-heavy flex-grow relative border border-token-border-heavy dark:text-white rounded-2xl bg-white dark:bg-gray-800 shadow-[0_0_0_2px_rgba(255,255,255,0.95)] dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)]">
          <textarea
            id="prompt-textarea"
            tabIndex={0}
            data-id="request-NEW:0-0"
            rows={1}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="m-0 w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
            style={{ maxHeight: '200px', height: '', overflowY: 'hidden' }}
          ></textarea>
          <button
            onClick={handleSendMessage}
            className="absolute bg-black md:bottom-3 md:right-3 dark:hover:bg-white right-2 disabled:opacity-10 disabled:text-gray-400 enabled:bg-black text-white p-0.5 border border-black rounded-lg dark:border-white dark:bg-white bottom-1.5 transition-colors "
            data-testid="send-button"
            disabled={!message.trim()}
          >
            <span className="" data-state="closed">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white dark:text-black">
                <path
                  d="M7 11L12 6L17 11M12 18V7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="text-center mt-4"><h1>&copy 2024</h1></div>
    </div>
   
    </div>
  );
};

export default ChatGPTUI;
