/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

const TodayAtGlanceCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const glances = [
    { label: 'Present Employees', count: 50 },
    { label: 'Absent Employees', count: 5 },
    { label: 'Clock ins', count: 34 },
    { label: 'On Leave', count: 6 }
  ];

  return (
    <div className="bg-white w-full sm:w-[20vw] md:w-[15vw] lg:w-[20vw] text-[12px] font-light shadow-md rounded-md p-4">
      <div className="flex justify-between items-center text-center border-b border-gray-300 mb-2">
        <span>Today at Glance</span>
        <span 
          className={`cursor-pointer ${isExpanded ? 'hidden md:block' : 'block md:hidden'}`} 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <AiOutlineRight />
        </span>
        <span 
          className={`cursor-pointer ${isExpanded ? 'block' : 'hidden md:block'}`} 
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <AiOutlineDown />
        </span>
      </div>
      <ul className={`max-h-[22vh] overflow-y-auto ${isExpanded ? 'block' : 'hidden md:block'}`}>
        {glances.map((glance, index) => (
          <li key={index} className='flex justify-between cursor-pointer h-[7vh] rounded items-center m-0.5 p-2 shadow-md border border-gray-300'>
            {glance.label}
            <span>{glance.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayAtGlanceCard;
