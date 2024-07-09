/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    'Dashboard',
    'Requirement',
    'Time & Attendance',
    'Time Off',
    'Employee Management',
    'Training',
    'Company',
  ];

  return (
    <div className=" w-[20%] bg-gray-600 text-white text-[12px] text-center h-screen">
      <div className="p-4">
        <div className="justify-center items-center">
          <button className="bg-yellow-500 py-2 px-4 rounded-full mb-4 ">
            One Connect HD
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
                onClick={() => setActiveItem(item)}
              >
                <div className="w-8 h-8 mr-2"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
