/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import LeaveApplications from './LeaveApplications';

const Actions = () => {
  const [activeItems, setActiveItems] = useState({});

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

  return (
    <div className='h-screen w-[30%] p-4 m-4 mt-7 shadow-md bg-white rounded-md'>
      <div className="flex justify-between text-center text-[12px] font-light border-b border-gray-300">For My actions
        <span><FaTasks/></span>
      </div>
      <div className='p-0 m-0 font-thin text-[12px]'>
        <ul className='max-h-[100vh] overflow-y-auto'>
          {actionItems.map((item) => (
            <React.Fragment key={item}>
              <li
                className='flex justify-between cursor-pointer h-[7vh] rounded items-center m-0.5 shadow-md border border-gray-300 '
                onClick={() => toggleItem(item)}
              >
                <span>{item}</span>
                <span>
                  {activeItems[item] ? <AiOutlineDown /> : <AiOutlineRight />}
                </span>
              </li>
              {item === 'Leave Applications' && activeItems[item] && (
                <div className='ml-4 mt-2'>
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
