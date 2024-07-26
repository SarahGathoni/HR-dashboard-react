/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import LeaveApplications from './LeaveApplications';

const Actions = () => {
  const [activeItems, setActiveItems] = useState({});
  const [isExpanded, setIsExpanded] = useState(false); // State to manage list visibility on small screens

  const actionItems = [
    'Leave Applications',
    'Employment Claims',
    'Contract Renewals',
    'Job Applications',
    'Training Requests',
    'Upcoming Interviews',
  ];

  const toggleItem = (item) => {
    setActiveItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const toggleListVisibility = () => {
    setIsExpanded((prevState) => !prevState); // Toggle list visibility
  };

  return (
    <div
      className={`bg-white shadow-md rounded-md p-4 m-4 mt-7 transition-all duration-300 lg:h-screen ${
        isExpanded ? 'h-auto' : 'h-[8vh]'
      } ${isExpanded ? 'w-full' : 'w-full sm:w-[80%] md:w-[70%] lg:w-auto max-w-[600px] mx-auto'}`}
    >
      <div className="flex justify-between items-center text-center text-[12px] font-light border-b border-gray-300 mb-2">
        <span>For My Actions</span>
        <span
          className="cursor-pointer lg:hidden" // Hide toggle icon on large screens
          onClick={toggleListVisibility}
        >
          {isExpanded ? <AiOutlineDown /> : <AiOutlineRight />}
        </span>
      </div>
      <div
        className={`font-thin text-[12px] ${isExpanded ? 'block' : 'hidden md:block lg:block'}`}
      >
        {/* Toggle visibility based on state and screen size */}
        <ul className="max-h-[75vh] overflow-y-auto">
          {actionItems.map((item) => (
            <React.Fragment key={item}>
              <li
                className="flex justify-between cursor-pointer h-[7vh] rounded-sm items-center m-0.5 p-2 shadow-md border border-gray-300"
                onClick={() => toggleItem(item)}
              >
                <span>{item}</span>
                <span>
                  {activeItems[item] ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </li>
              {item === 'Leave Applications' && activeItems[item] && (
                <div className="ml-4 mt-2 text-sm bg-gray-100 p-2 rounded-sm border border-gray-300">
                  <LeaveApplications />
                </div>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Actions;
