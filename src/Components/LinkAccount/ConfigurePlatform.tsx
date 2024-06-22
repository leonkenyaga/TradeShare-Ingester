import { ChildModule1 } from "../MainModule";
import metaIcon from "../../assets/clipart2971503.png";
import { Link } from "@tanstack/react-router";
function ConfigurePlatform() {
  return (
    <ChildModule1>
      <div className="fixed relative shadow-xl grid place-content-center bg-stone-900">
        <div className="w-full flex justify-center ">
          Select Your Trading Platform
        </div>
      </div>
      <div className="bg-stone-900">
        <div className="grid grid-cols-[1fr_4fr]">
          <div className="grid place-content-center">
            <div className="flex justify-center">
              <img src={metaIcon} className="w-12 h-12" />
            </div>
          </div>

          <div className="grid grid-rows-[1fr_1fr_1fr]">
            <div className=" text-sm font-bold relative">
              {" "}
              <div className="absolute bottom-0 "> MetaTrader </div>{" "}
            </div>
            <div className="relative">
              {" "}
              <div className="overflow-hidden">
                {" "}
                Trading platform for forex and CFDs.{" "}
              </div>{" "}
            </div>
            <div className=" grid grid-cols-[1fr_6fr_3fr]">
              <div className="relative">
                {" "}
                <svg
                  className="fill-TradeShareblue"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                >
                  <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
                </svg>
              </div>
              <div className="relative">
                <div className="text-sm font-semibold">
                  {" "}
                  MetaQuotes Software Corp.
                </div>
              </div>
              <div className="relative">
                {" "}
                <Link to="/LinkAccount/Metatrader/"> 
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300 absolute bottom-0 right-0">
                  Connect
                </span>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </ChildModule1>
  );
}

export default ConfigurePlatform;
