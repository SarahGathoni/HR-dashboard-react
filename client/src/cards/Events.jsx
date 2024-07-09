/* eslint-disable no-unused-vars */
import React from 'react'
import { FaTasks } from 'react-icons/fa';

const Events = () => {
  return (
    
    <div className="bg-white  w-[52vw] h-[30vh] ml-8 shadow-md rounded-lg p-4 font-light text-[12px]">
        <div className="flex justify-between text-center border-b border-gray-300">Upcoming Events
        <span><FaTasks/></span>
        </div>
        {/* Add your announcement content here */}
    </div>
    
  )
}

export default Events
