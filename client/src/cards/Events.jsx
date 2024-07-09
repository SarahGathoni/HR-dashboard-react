/* eslint-disable no-unused-vars */
import React from 'react'
import { FaTasks } from 'react-icons/fa';

const Events = () => {

  const events = [
    { date: '27', month: 'Mon', title: 'Event 1', description: 'Description for Event 1' },
    { date: '28', month: 'Tue', title: 'Event 2', description: 'Description for Event 2' },
    { date: '29', month: 'Wed', title: 'Event 3', description: 'Description for Event 3' },
    { date: '30', month: 'Thur', title: 'Event 4', description: 'Description for Event 4' },
    { date: '31', month: 'Fri', title: 'Event 5', description: 'Description for Event 5' },
];
  return (
    
    <div className="bg-white  w-[52vw] h-[30vh] ml-8 shadow-md rounded-lg p-4 font-light text-[12px]">
        <div className="flex justify-between text-center border-b border-gray-300">Upcoming Events
        <span><FaTasks/></span>
        </div>
        {/* Add your announcement content here */}
        <div className="flex grid-cols-1 gap-4 justify-center items-center">
                {events.map((event, index) => (
                    <div key={index} className="grid justify-center items-center p-4 bg-gray-40 rounded-sm border-r border-gray-500">
                        <div className="mr-4 text-left">
                            <div className="text-[12px] ">{event.month}</div>
                            <div className="text-lg text-gray-500 font-bold">{event.date}</div>
                        </div>
                        <div className='border-t border-gray-500'>
                            <h3 className="text-[12px]">{event.title}</h3>
                            <p className="text-gray-600">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
    
  )
}

export default Events
