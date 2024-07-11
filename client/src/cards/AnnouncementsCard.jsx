/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

const AnnouncementsCard = () => {
  const [activeItems, setActiveItems] = useState({});

  const Announcements = [
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

  return (
    <div className="bg-white w-[15vw] shadow-md rounded-lg p-4 font-light text-[12px] overflow-hidden">
      <div className="text-center border-b border-gray-300 max-w-full">Announcements</div>
      <ul className='max-h-[22vh] overflow-y-auto'>
        {Announcements.map((Announcement) => (
          <React.Fragment key={Announcement}>
            <li
              className="flex justify-between cursor-pointer h-[7vh] rounded items-center m-0.5 shadow-md border border-gray-300"
              onClick={() => toggleItem(Announcement)}
            >
              <span>{Announcement}</span>
              <span>
                {activeItems[Announcement] ? <AiOutlineDown /> : <AiOutlineRight />}
              </span>
            </li>
            {Announcement === 'Announcement 1' && activeItems[Announcement] && (
              <div className="ml-4 mt-2">
                <p>Lem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementsCard;
