import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Actions from "./components/Actions";
import Allcards from "./cards/Allcards";
import Events from "./cards/Events";
import TaskBalances from "./cards/TaskBalances";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Navbar className="w-full" />
        <div className="flex flex-1 bg-gray-200">
          <Actions className="w-1/4" />
          <div className="flex flex-col flex-1 p-4">
            <Allcards />
            <Events />
            <TaskBalances />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
