import { useState } from "react";
import { Link } from "@tanstack/react-router";
import Home from "./List elements/Home";
import MyAccounts from "./List elements/MyAccounts";
import LinkAccount from "./List elements/LinkAccount";
import Inbox from "./List elements/Inbox";
import Following from "./List elements/Following";
import Settings from "./List elements/Settings";






function List(){
 
const defaultClass = "px-3 min-h-12 border-l-2 border-stone-900"

 const selectedClass = " border-l-2 border-TradeShareblue px-3 min-h-12"

 const [selected, setSelected] = useState("Home")

    return(

      <div className="grid grid-rows-[1fr_1fr_1fr_1fr_1fr_6fr] min-w-12 bg-stone-900 border-r border-TradeSharegray">
      <Link to="/">
      <button  value="Home" className= {selected === "Home" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}> 
     <Home />
      </button> 
      </Link>   
      <Link to= "/MyAccounts">
      <button  value="MyAccounts" className= {selected === "MyAccounts" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}>
      <MyAccounts />
      </button> 
      </Link>
      <Link to="/LinkAccount">
      <button  value="LinkAccount" className= {selected === "LinkAccount" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}>
      <LinkAccount />
      </button> 
      </Link>
      <Link to="/Inbox">
      <button  value="Inbox" className= {selected === "Inbox" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}>
      <Inbox />
      </button> 
      </Link>
      <Link to="/Following">
      <button  value="Following" className= {selected === "Following" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}>
      <Following />
      </button>
      </Link>

      <div className="bg-purple-700 px-3 min-h-16 bg-stone-900 relative">
        <div className="absolute bottom-0">
<Settings />
</div>
      </div>
    </div>
    )
}

export default List;