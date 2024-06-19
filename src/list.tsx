import { Link } from "@tanstack/react-router";
import Home from "./List elements/Home";
import MyAccounts from "./List elements/MyAccounts";
import AddAccount from "./List elements/AddAccount";
import Inbox from "./List elements/Inbox";
import Following from "./List elements/Following";
import Settings from "./List elements/Settings";






function List(){
 

    return(

      <ul className="grid grid-rows-[1fr_1fr_1fr_1fr_1fr_5fr] min-w-12 bg-stone-900 border-r-2 border-TradeSharegray">
      <li className="border-l-2 border-TradeShareblue px-3 min-h-16"> 
      <Link to="/">
     <Home />
      </Link>      
      </li>

      <li className="border-l-2 border-TradeShareblue px-3 min-h-16">
      <Link to= "/MyAccounts">
      <MyAccounts />
      </Link>
      </li>
      <li className="border-l-2 border-TradeShareblue px-3 min-h-16">
      <Link to="/AddAccount">
      <AddAccount />
      </Link>
      </li>
      <li className="border-l-2 border-TradeShareblue px-3 min-h-16"> 
      <Link to="/Inbox">
      <Inbox />
      </Link>
      </li>
      <li className="border-l-2 border-TradeShareblue px-3 min-h-16">
      <Link to="/Following">
      <Following />
      </Link>
      </li>
      <div className="bg-purple-700 px-3 min-h-16 bg-stone-900 ">
        <div className="mt-4 pt-64 ">
<Settings />
</div>
      </div>
    </ul>
    )
}

export default List;