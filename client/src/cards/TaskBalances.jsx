import React, { useState } from 'react';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

const TaskBalances = () => {
  const [activeItems, setActiveItems] = useState({});
  const [isExpandedTasks, setIsExpandedTasks] = useState(false);
  const [isExpandedBalances, setIsExpandedBalances] = useState(false);

  // Tasks
  const tasks = ['My Tasks', 'Team Tasks'];

  const Descs = [
    {
      name: 'Task One',
      date: 'Due Date: June 12th 10.00pm',
      description: 'Task Description: Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
    {
      name: 'Task Two',
      date: 'Due Date: June 12th 10.00pm',
      description: 'Task Description: Lorem ipsum dolor sit amet, consectetur adipiscing',
    },
  ];

  // Leave Balances
  const leaves = ['My Leave Balances', 'Team Leave Balances'];

  const leaveDescs = [
    {
      description: 'Maternity Leave',
      days: '15 Days',
    },
    {
      description: 'Annual Leave',
      days: '05 Days',
    },
    {
      description: 'Sick Leave',
      days: '05 Days',
    },
    {
      description: 'Emergency Leave',
      days: '05 Days',
    },
  ];

  const toggleItem = (item) => {
    setActiveItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const toggleExpandTasks = () => {
    setIsExpandedTasks((prevState) => !prevState);
  };

  const toggleExpandBalances = () => {
    setIsExpandedBalances((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4 m-2">
      {/* Tasks Section */}
      <div
        className={`bg-white w-full md:w-[48%] shadow-md rounded-md p-4 font-light text-[12px] transition-all duration-300 ${
          isExpandedTasks ? 'h-auto' : 'h-[8vh] lg:h-auto'
        }`}
      >
        <div className="flex justify-between items-center border-b border-gray-300 mb-2">
          <span>Tasks</span>
          <span
            className="cursor-pointer lg:hidden"
            onClick={toggleExpandTasks}
          >
            {isExpandedTasks ? <AiOutlineDown /> : <AiOutlineRight />}
          </span>
        </div>
        <div
          className={`p-0 m-0 font-thin text-[12px] ${
            isExpandedTasks ? 'block' : 'hidden md:block lg:block'
          }`}
        >
          {/* Toggle visibility based on state and screen size */}
          <ul className="max-h-[22vh] overflow-y-auto">
            {tasks.map((task) => (
              <React.Fragment key={task}>
                <li
                  className="flex justify-between cursor-pointer h-[7vh] rounded-sm items-center m-0.5 p-2 shadow-md border border-gray-300"
                  onClick={() => toggleItem(task)}
                >
                  <span>{task}</span>
                  <span>
                    {activeItems[task] ? <AiOutlineDown /> : <AiOutlineRight />}
                  </span>
                </li>
                {task === 'My Tasks' && activeItems[task] && (
                  <div className="ml-4 mt-2 text-sm bg-gray-100 p-2 rounded-sm border border-gray-300">
                    {Descs.map((Desc, index) => (
                      <div key={index} className="pb-2 border-b border-gray-200">
                        <p className="font-semibold">{Desc.name}</p>
                        <p className="text-gray-600">{Desc.date}</p>
                        <p className="text-gray-600">{Desc.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>

      {/* Leave Balances Section */}
      <div
        className={`bg-white w-full md:w-[48%] shadow-md rounded-md p-4 font-light text-[12px] transition-all duration-300 ${
          isExpandedBalances ? 'h-auto' : 'h-[8vh] lg:h-auto'
        }`}
      >
        <div className="flex justify-between items-center border-b border-gray-300 mb-2">
          <span>Leave Balances</span>
          <span
            className="cursor-pointer lg:hidden"
            onClick={toggleExpandBalances}
          >
            {isExpandedBalances ? <AiOutlineDown /> : <AiOutlineRight />}
          </span>
        </div>
        <div
          className={`p-0 m-0 font-thin text-[12px] ${
            isExpandedBalances ? 'block' : 'hidden md:block lg:block'
          }`}
        >
          {/* Toggle visibility based on state and screen size */}
          <ul className="max-h-[22vh] overflow-y-auto">
            {leaves.map((leave) => (
              <React.Fragment key={leave}>
                <li
                  className="flex justify-between cursor-pointer h-[7vh] rounded-sm items-center m-0.5 p-2 shadow-md border border-gray-300"
                  onClick={() => toggleItem(leave)}
                >
                  <span>{leave}</span>
                  <span>
                    {activeItems[leave] ? <AiOutlineDown /> : <AiOutlineRight />}
                  </span>
                </li>
                {leave === 'My Leave Balances' && activeItems[leave] && (
                  <div className="ml-4 mt-2 text-sm bg-gray-100 p-2 rounded-sm border border-gray-300">
                    {leaveDescs.map((leaveDesc, index) => (
                      <div key={index} className="pb-2 border-b border-gray-200">
                        <p className="flex justify-between">
                          {leaveDesc.description}
                          <span className="font-semibold">{leaveDesc.days}</span>
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
};

export default TaskBalances;
