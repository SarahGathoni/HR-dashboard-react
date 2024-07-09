/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FaTasks } from 'react-icons/fa';

const ClockInCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    //const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between text-center text-[12px] font-light border-b border-gray-300">Clock In
        <span><FaTasks/></span>
      </div>
      <div className="text-center text-gray-500 text-4xl font-semibold my-4">{formatTime(currentTime)}</div>
      <div className="grid justify-center m-4 space-x-4">
        <button className="bg-green-500 text-white text-[12px] py-2 px-4 rounded-full">Clock In</button>
        <button className="bg-red-500 text-white mt-5 py-2 px-4 text-[12px] rounded-full">Clock Out</button>
      </div>
    </div>
  );
};

export default ClockInCard;
