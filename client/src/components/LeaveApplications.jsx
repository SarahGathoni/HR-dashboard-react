/* eslint-disable no-unused-vars */
import React from 'react'


const LeaveApplications = () => {

    const applications = [{
        image:'/src/assets/man.jpg',
        name:'Jonathan Maxwell Doe',
        role:'Application Developer',
     },
     {
         image:'/src/assets/woman.jpg',
         name:'Jonathan Maxwell Doe',
         role:'Application Developer', 
     },
     {
         image:'/src/assets/man.jpg',
         name:'Jonathan Maxwell Doe',
         role:'Application Developer',
     },
     {
         image:'/src/assets/woman.jpg',
         name:'Jonathan Maxwell Doe',
         role:'Application Developer',
     },
     {
         image:'/src/assets/man.jpg',
         name:'Jonathan Maxwell Doe',
         role:'Application Developer',
     },
     {
         image:'/src/assets/woman.jpg',
         name:'Jonathan Maxwell Doe',
         role:'Application Developer',
     },
     {
         image:'/src/assets/man.jpg',
         name:'Jonathan Maxwell Doe',
         role:'Application Developer',
     },
     {
         image:'/src/assets/woman.jpg',
         name:'Jonathan Maxwell Doe',
         role:'Application Developer',
     }
     ]
  return (
    <div>
            <ul>
        {applications.map((application, index) => (
          <li key={index} className="flex items-center mb-4">
            <img src={application.image} alt={application.name} className="w-10 h-10 rounded-full mr-4" />
            <div>
              <p className="font-light text-[12px]">{application.name}</p>
              <p className="text-gray-600">{application.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default LeaveApplications
