import List from "./list";
import { Outlet } from "@tanstack/react-router";
import Statusbar from "./statusbar";
import Module from "./Module"

function App() {
  return (
    <div className="grid grid-rows-[50fr_1fr] h-screen">
      <div className="h-full bg-yellow-500 ">
        <div className=" h-full grid grid-cols-[1fr_10fr]">
          <div className="grid grid-rows-[1fr_1fr_1fr_1fr_1fr_3fr]  bg-red-500">
          
          <div className="bg-blue-200"> 1</div>
          <div className="bg-gray-200">2</div>
          <div className="bg-green-300">3</div>
          <div className="bg-blue-200"> 4</div>
          <div className="bg-gray-200">5</div>
          <div className="bg-purple-700">6</div>


           
          </div>
          <Module />
         
        </div>
      </div>
      <div className="bg-blue-500"> 01 </div>
    </div>
  );
}

export default App;
