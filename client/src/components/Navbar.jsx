/* eslint-disable no-unused-vars */
import React from 'react';
import { RiNotification3Line } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="flex  justify-end items-center h-16 px-4 bg-white text-black ml-auto text-[12px]">
      {/* Quick Links with MdKeyboardArrowDown icon */}
      <div className="mr-20 cursor-pointer ">
        Quick Links
        <span className="ml-1 inline-block align-middle">
          <svg
            className="w-4 h-4 inline-block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>

      {/* Notification with rounded yellow background and black icon */}
      <div className="relative">
        <div className="absolute -mt-5 right-0 rounded-full bg-yellow-500 w-10 h-10  flex items-center justify-center text-black">
          <RiNotification3Line className="h-4 w-4" />
        </div>
      </div>

      {/* Profile icon with rounded blue background */}
      
        <img src="https://www.pexels.com/photo/woman-in-collared-shirt-774909/" alt="profile" className="ml-4 rounded-full  w-10 h-10"/>
      
    </div>
  );
};

export default Navbar;
