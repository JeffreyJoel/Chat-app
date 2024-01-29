"use client"
import { useEffect, useState } from 'react';

const ChatComponent: React.FC = () => {

  function handleSendMessage(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
     <div className="text-token-primary sticky top-0 z-10 flex min-h-[40px] items-center justify-center border-b border-token-border-medium bg-token-surface-primary pl-1 dark:bg-token-surface-secondary md:hidden">
      <button
        type="button"
        className="absolute left-0 -ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50"
      >
        <span className="sr-only">Open sidebar</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
      </button>
      <div
        className="group flex cursor-pointer items-center gap-1 rounded-xl py-2 px-3 text-lg font-medium hover:bg-gray-50 radix-state-open:bg-gray-50 dark:hover:bg-black/10 dark:radix-state-open:bg-black/20"
        id="radix-:rlf:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        <div>
          ChatGPT <span className="text-token-text-secondary">3.5</span>
        </div>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" className="text-token-text-tertiary">
          <path
            d="M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 top-0 flex items-center">
        <button type="button" className="px-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-md">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    
    {/* <div className="flex flex-col min-h-screen ">
      <div className="flex w-full items-center">
        <div className="overflow-hidden [&amp;:has(textarea:focus)]:border-token-border-xheavy [&amp;:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)] flex flex-col w-full dark:border-token-border-heavy flex-grow relative border border-token-border-heavy dark:text-white rounded-2xl bg-white dark:bg-gray-800 shadow-[0_0_0_2px_rgba(255,255,255,0.95)] dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)]">
          <textarea
            id="prompt-textarea"
            tabIndex={0}
            data-id="request-NEW:0-0"
            rows={1}
            placeholder="Message ChatGPT…"
            onChange={(e) => postMessage(e.target.value)}
            className="m-0 w-full resize-none border-0 bg-transparent py-[10px] pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:py-3.5 md:pr-12 placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
            style={{ maxHeight: '200px', height: '44px', overflowY: 'hidden' }}
          ></textarea>
          <button
            onClick={handleSendMessage}
            className="absolute bg-black md:bottom-3 md:right-3 dark:hover:bg-white right-2 disabled:opacity-10 disabled:text-gray-400 enabled:bg-black text-white p-0.5 border border-black rounded-lg dark:border-white dark:bg-white bottom-1.5 transition-colors"
            data-testid="send-button"
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
    </div> */}
    </>
  );
};

export default ChatComponent;
