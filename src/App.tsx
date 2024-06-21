import List from "./list";
import { Link ,Outlet } from "@tanstack/react-router";
import Statusbar from "./statusbar";

function App() {
  return (
    <div className="grid grid-rows-[35fr_1fr] h-screen">
      <div className="h-full bg-yellow-500 ">
        <div className="h-full grid grid-cols-[1fr_34fr]">
          <List />
          <Outlet />
        </div>
      </div>
      <div className=" bg-blue-500">
      <div className="h-full grid grid-cols-[1fr_34fr] border-t border-TradeSharegray">
          <div className="bg-TradeShareblue min-w-16 px-2">
           Status:
          </div>
          <div className="bg-black px-4">
          Up 1%
          </div>
        </div>
         </div>
    </div>
  );
}

export default App;
