/* eslint-disable no-unused-vars */
import React from 'react'

import ClockInCard from './ClockInCard';
import TodayAtGlanceCard from './TodayAtGlanceCard';
import AnnouncementsCard from './AnnouncementsCard';

const Allcards = () => {
  return (
    
     <div className="flex  p-4 ml-4 space-x-4 h-[40vh]">
        <ClockInCard />
        <TodayAtGlanceCard />
        <AnnouncementsCard />
    </div>
    
  )
}

export default Allcards;
