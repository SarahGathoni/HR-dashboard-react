/* eslint-disable no-unused-vars */
import React from 'react';

import ClockInCard from './ClockInCard';
import TodayAtGlanceCard from './TodayAtGlanceCard';
import AnnouncementsCard from './AnnouncementsCard';

const Allcards = () => {
  return (
    <div className="
      grid
      grid-cols-1
      md:grid-cols-1
      lg:flex
      lg:space-x-4
      gap-4
      p-4
      ml-4
      bg-gray-200
    ">
      <ClockInCard />
      <TodayAtGlanceCard />
      <AnnouncementsCard />
    </div>
  );
};

export default Allcards;
