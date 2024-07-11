/* eslint-disable no-unused-vars */
import React from 'react';

const TodayAtGlanceCard = () => {
  const glances =[
    
      'Present Employees',
      'Absent Employess',
      'Clock ins',
      'OnLeave'
    
  ]
  return (
    <div className="bg-white w-[20vw] text-[12px] font-light shadow-md rounded-lg p-4">
      <div className="text-center border-b border-gray-300">Today at a Glance</div>
        <ul className='max-h-[22vh] overflow-y-auto'>
          
          
            <li  className='flex justify-between  cursor-pointer h-[7vh] rounded items-center m-0.5 p-2 shadow-md border border-gray-300 '>
            Present Employees
              <span>50</span>
            </li>
            <li  className='flex justify-between  cursor-pointer h-[7vh] rounded items-center m-0.5 p-2 shadow-md border border-gray-300 '>
            Absent Employess
              <span>05</span>
            </li>

            <li  className='flex justify-between  cursor-pointer h-[7vh] rounded items-center m-0.5 p-2 shadow-md border border-gray-300 '>
            Clock ins
              <span>34</span>
            </li>

            <li  className='flex justify-between  cursor-pointer h-[7vh] rounded items-center m-0.5 p-2 shadow-md border border-gray-300 '>
            On Leave
              <span>06</span>
            </li>
        
        </ul>
    </div>
  );
};

export default TodayAtGlanceCard;
