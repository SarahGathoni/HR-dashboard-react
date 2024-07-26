/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Actions from "./components/Actions";
import Allcards from "./cards/Allcards";
import Events from "./cards/Events";
import TaskBalances from "./cards/TaskBalances";

const App = () => {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return (
          <div className="flex flex-col-reverse md:flex-row flex-1 p-4">
          <div className="md:w-1/4">
            <Actions />
          </div>
          <div className="flex-1">
            <Allcards />
            <Events />
            <TaskBalances />
          </div>
        </div>
        );
      // Add other cases here for different sidebar items
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex ">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <div className="flex flex-col w-full">
        <Navbar className="w-full" />
        <div className="flex flex-1 bg-gray-200">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;
