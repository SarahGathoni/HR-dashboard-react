import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Actions from "./components/Actions";
import Allcards from "./cards/Allcards";

import Events from "./cards/Events";
import TaskBalances from "./cards/TaskBalances";

const App = () => {
  return (
    <div className="">
      <div className="flex h-[100vh]">
          <Sidebar />
         <div className="grid flex-col w-[80%] h-screen">
        <Navbar className="w-full" />
        <div className="flex h-screen bg-gray-200  ">
          
            <Actions />
            <span>
            <Allcards/>
            <Events/>
            <TaskBalances/>
            </span>
            
            
         </div>
         
         
      </div>
    </div>
    </div>
    
  );
};

export default App;
