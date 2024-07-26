/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    'Dashboard',
    'Requirement',
    'Time & Attendance',
    'Time Off',
    'Employee Management',
    'Training',
    'Company',
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Menu Icon */}
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <AiOutlineClose size={24} className="text-white" />
          ) : (
            <AiOutlineMenu size={24} className="text-yellow-500" />
          )}
        </button>
      </div>
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen lg:w-full lg:h-full bg-gray-600 text-white text-[12px] transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 md:w-[20%] lg:w-[20%]`}
        style={{ zIndex: 50 }} // Ensures the sidebar is on top
      >
        <div className="p-4 h-full">
          <div className="flex justify-between items-center">
            <button className="bg-yellow-500 py-2 px-4 rounded-full mb-4 md:hidden">
              One Connect HD
            </button>
            <button
              className="md:hidden p-2"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <AiOutlineClose size={24} className="text-white" />
              ) : (
                <AiOutlineMenu size={24} className="text-yellow-500" />
              )}
            </button>
          </div>
          <div className="mt-10 p-0 m-0 font-thin">
            <ul>
              {menuItems.map((item) => (
                <li
                  key={item}
                  className={`flex cursor-pointer h-[10vh] rounded items-center m-0.5 ${
                    activeItem === item ? 'bg-yellow-500' : 'hover:bg-yellow-500'
                  }`}
                  onClick={() => {
                    setActiveItem(item);
                    if (isSidebarOpen) toggleSidebar(); // Close sidebar on item click if open
                  }}
                >
                  <div className="w-8 h-8 mr-2"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
