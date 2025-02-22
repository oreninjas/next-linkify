"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [isHambergOn, setIsHambergOn] = useState(false);

  return (
    <nav className="fixed w-screen my-3 md:px-56 px-8">
      <div className="bg-white flex justify-between items-center w-full backdrop:blur-2xl px-8 h-[50px] rounded-lg outline outline-1 outline-gray-200">
        <div className="flex gap-7 items-center" role="button">
          <h2 className="text-xl text-[#737373] hover:text-[#0a0a0a] cursor-pointer transition-all transition-duration-500">
            iFaiyan
          </h2>
        </div>
        <div className="hidden md:flex gap-x-7 text-[#737373] text-mine">
          <button className="cursor-pointer hover:text-[#0a0a0a] transition-all transition-duration-250">
            About
          </button>
          <button className="cursor-pointer hover:text-[#0a0a0a] transition-all transition-duration-250">
            Features
          </button>
          <button
            onClick={() => router.push("/login")}
            className="cursor-pointer hover:text-[#0a0a0a] transition-all transition-duration-250"
          >
            Log In
          </button>
        </div>
        <div className="md:hidden">
          {!isHambergOn ? (
            <svg
              className="cursor-pointer"
              onClick={() => setIsHambergOn(true)}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="1.5em"
              height="1.5em"
            >
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              onClick={() => setIsHambergOn(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer lucide lucide-x mt-1"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          )}
        </div>
      </div>
      {isHambergOn && (
        <div className="bg-white md:hidden w-full flex flex-col gap-y-2 pt-4 px-5 overflow-hidden">
          <button className="w-full flex flex-row items-center gap-x-4 text-left text-[#737373] hover:text-[#0a0a0a] transition-all duration-350 pl-2 py-2">
            About
          </button>
          <button className="w-full flex flex-row items-center gap-x-4 text-left text-[#737373] hover:text-[#0a0a0a] transition-all duration-350 pl-2 py-2">
            Features
          </button>
          <button
            onClick={() => router.push("/login")}
            className="w-full flex flex-row items-center gap-x-4 text-left text-[#737373] hover:text-[#0a0a0a] transition-all duration-350 pl-2 py-2"
          >
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
