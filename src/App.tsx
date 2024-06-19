import List from "./list";
import { Link ,Outlet } from "@tanstack/react-router";
import Statusbar from "./statusbar";
import Module from "./Module";

function App() {
  return (
    <div className="grid grid-rows-[50fr_1fr] h-screen">
      <div className="h-full bg-yellow-500 ">
        <div className="h-full grid grid-cols-[1fr_34fr]">
          <List />
          <Module />
        </div>
      </div>
      <div className=" bg-blue-500"> 01 </div>
    </div>
  );
}

export default App;
