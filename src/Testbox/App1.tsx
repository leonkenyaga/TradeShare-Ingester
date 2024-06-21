import "./index.css";
import Sidebar from "./Sidebar";

export default function App1() {
  return (
  <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] bg-black">
     <Sidebar />
      <div className=" bg-red-500">Main Content</div>
      <div className=" col-span-2 bg-yellow-500">Player</div>
  </div>
  )
}