// ClockInCard.jsx
/* eslint-disable no-unused-vars */

import React from 'react';

const ClockInCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-md p-4">
      <div className="text-2xl font-bold mb-4">11:53</div>
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-col text-[12px] items-center justify-center sm:space-x-4 md:space-x-4 space-y-2 lg:space-y-2">
        <button className="bg-green-500 text-white rounded-md px-4 py-2 w-full sm:w-auto">
          Clock In
        </button>
        <button className="bg-red-500 text-white rounded-md px-4 py-2 w-full sm:w-auto">
          Clock Out
        </button>
      </div>
    </div>
  );
};

export default ClockInCard;
