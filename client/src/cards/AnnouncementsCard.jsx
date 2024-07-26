/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

const AnnouncementsCard = () => {
  const [activeItems, setActiveItems] = useState({});
  const [isExpanded, setIsExpanded] = useState(false); // State for toggling on small and medium devices

  const announcements = [
    'Announcement 1',
    'Announcement 2',
    'Announcement 3',
  ];

  const toggleItem = (item) => {
    setActiveItems((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div
      className={`bg-white w-full sm:w-[20vw] md:w-[15vw] lg:w-[20vw] shadow-md rounded-md p-4 font-light text-[12px] transition-all duration-300 ${
        isExpanded ? 'h-auto' : 'h-[8vh] lg:h-auto'
      }`}
    >
      <div className="flex justify-between items-center border-b border-gray-300 mb-2">
        <span>Announcements</span>
        <span
          className={`cursor-pointer text-black${isExpanded ? 'hidden md:block' : 'block md:hidden'}`}
          onClick={toggleExpansion}
        >
          {isExpanded ? <AiOutlineDown /> : <AiOutlineRight />}
        </span>
      </div>
      <ul
        className={`max-h-[75vh] overflow-y-auto ${
          isExpanded ? 'block' : 'hidden md:block'
        }`}
      >
        {announcements.map((announcement) => (
          <React.Fragment key={announcement}>
            <li
              className="flex justify-between cursor-pointer h-[7vh] rounded-sm items-center m-0.5 p-2 shadow-md border border-gray-300"
              onClick={() => toggleItem(announcement)}
            >
              <span>{announcement}</span>
              <span>
                {activeItems[announcement] ? <AiOutlineDown /> : <AiOutlineRight />}
              </span>
            </li>
            {activeItems[announcement] && (
              <div className="ml-4 mt-2 text-sm bg-gray-100 p-2 rounded-sm border border-gray-300">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementsCard;
