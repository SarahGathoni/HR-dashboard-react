/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { FaTasks } from 'react-icons/fa';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

const TaskBalances = () => {
  const [activeItems, setActiveItems] = useState({});

  // Tasks
  const tasks = [
    'My Tasks',
    'Team Tasks',
  ];
  
  const Descs = [{
    name: 'Task One',
    date: 'Due Date: June 12th 10.00pm',
    description: 'Task Description: Lorem ipsum dolor sit amet, consectetur adipiscing',
  },
  {
    name: 'Task Two',
    date: 'Due Date: June 12th 10.00pm',
    description: 'Task Description: Lorem ipsum dolor sit amet, consectetur adipiscing',
  }];

  // Leave Balances
  const leaves = [
    'My Leave Balances',
    'Team Leave Balances',
  ];
  const leaveDescs = [{
    description: 'Maternity Leave',
    days: '15 Days'
  },
  {
    description: 'Maternity Leave',
    days: '05 Days'
  },
  {
    description: 'Sick Leave',
    days: '05 Days'
  },
  {
    description: 'Sick Leave',
    days: '05 Days'
  }
];

  const toggleItem = (item) => {
    setActiveItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <div className='flex m-2 max-w-full '>
      <div className="bg-white w-[24vw] h-[30vh] ml-8 mt-2 shadow-md rounded-lg p-4 font-light text-[12px]">
        <div className="flex justify-between text-center border-b border-gray-300">
          Tasks
          <span><FaTasks /></span>
        </div>
        <div className='overflow-hidden'>
          <ul className='max-h-[22vh] overflow-y-auto'>
            {tasks.map((task) => (
              <React.Fragment key={task}>
                <li
                  className="flex justify-between cursor-pointer h-[7vh] rounded items-center m-0.5 shadow-md border border-gray-300"
                  onClick={() => toggleItem(task)}
                >
                  <span>{task}</span>
                  <span>
                    {activeItems[task] ? <AiOutlineDown /> : <AiOutlineRight />}
                  </span>
                </li>
                {task === 'My Tasks' && activeItems[task] && (
                  <div className="ml-4 mt-2">
                    {Descs.map((Desc, index) => (
                      <div key={index} className='pb-2 border-b border-gray-200'>
                        <p>{Desc.name}</p>
                        <p>{Desc.date}</p>
                        <p>{Desc.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-white w-[24vw] h-[30vh] ml-8 mt-2 shadow-md rounded-lg p-4 font-light text-[12px] ">
        <div className="flex justify-between text-center border-b border-gray-500">
          Leave Balances
          <span><FaTasks /></span>
        </div>
        <div className='overflow-hidden'>
          <ul className='max-h-[22vh] overflow-y-auto'>
            {leaves.map((leave) => (
              <React.Fragment key={leave}>
                <li
                  className="flex justify-between cursor-pointer h-[7vh] rounded items-center m-0.5 shadow-md border border-gray-300"
                  onClick={() => toggleItem(leave)}
                >
                  <span>{leave}</span>
                  <span>
                    {activeItems[leave] ? <AiOutlineDown /> : <AiOutlineRight />}
                  </span>
                </li>
                {leave === 'My Leave Balances' && activeItems[leave] && (
                  <div className="ml-4 mt-2">
                    {leaveDescs.map((leaveDesc, index) => (
                      <div key={index} className='pb-2 border-b border-gray-200'>
                        <p className='flex justify-between'>{leaveDesc.description}
                          <span>{leaveDesc.days}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TaskBalances;
