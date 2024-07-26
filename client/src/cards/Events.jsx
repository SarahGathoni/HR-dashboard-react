/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

const Events = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const events = [
    { date: '27', month: 'Mon', title: 'Event 1', description: 'Description for Event 1' },
    { date: '28', month: 'Tue', title: 'Event 2', description: 'Description for Event 2' },
    { date: '29', month: 'Wed', title: 'Event 3', description: 'Description for Event 3' },
    { date: '30', month: 'Thu', title: 'Event 4', description: 'Description for Event 4' },
    { date: '31', month: 'Fri', title: 'Event 5', description: 'Description for Event 5' },
  ];

  return (
    <div className={`bg-white w-full sm:w-[20vw] md:w-[15vw] lg:w-[52vw] lg:h-[30vh] lg:ml-8 shadow-md rounded-md p-4 font-light text-[12px]`}>
      <div className="flex justify-between items-center border-b border-gray-300 mb-2">
        <span>Upcoming Events</span>
        <FaRegCalendarAlt 
          className={`cursor-pointer ${isExpanded ? 'hidden md:block' : 'block md:hidden'}`} 
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <AiOutlineDown 
          className={`cursor-pointer ${isExpanded ? 'block' : 'hidden md:block'}`} 
          onClick={() => setIsExpanded(!isExpanded)}
        />
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 ${isExpanded ? 'block' : 'hidden md:grid'}`}>
        {events.map((event, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between bg-gray-100 rounded-sm border border-gray-300 p-2 h-full"
          >
            <div className="text-center mb-2">
              <div className="text-xs text-gray-500">{event.month}</div>
              <div className="text-lg text-gray-700 font-bold">{event.date}</div>
            </div>
            <div className="text-center flex-1 border-t border-gray-300 pt-2 w-full">
              <h3 className="text-sm text-gray-800 truncate">{event.title}</h3>
              <p className="text-xs text-gray-600 truncate">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
