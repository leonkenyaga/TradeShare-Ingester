import { useState } from "react";
import { Link } from "@tanstack/react-router";
import Home from "./List elements/Home";
import MyAccounts from "./List elements/MyAccounts";
import AddAccount from "./List elements/AddAccount";
import Inbox from "./List elements/Inbox";
import Following from "./List elements/Following";
import Settings from "./List elements/Settings";






function List(){
 
const defaultClass = "px-3 min-h-16 border-l-2 border-stone-900"

 const selectedClass = " border-l-2 border-TradeShareblue px-3 min-h-16"

 const [selected, setSelected] = useState("Home")

    return(

      <div className="grid grid-rows-[1fr_1fr_1fr_1fr_1fr_5fr] min-w-12 bg-stone-900 border-r-2 border-TradeSharegray">
      <button  value="Home" className= {selected === "Home" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}> 
      <Link to="/">
     <Home />
      </Link>      
      </button> 

      <button  value="MyAccounts" className= {selected === "MyAccounts" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}>
      <Link to= "/MyAccounts">
      <MyAccounts />
      </Link>
      </button> 
      <button  value="AddAccount" className= {selected === "AddAccount" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}>
      <Link to="/AddAccount">
      <AddAccount />
      </Link>
      </button> 
      <button  value="Inbox" className= {selected === "Inbox" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}> 
      <Link to="/Inbox">
      <Inbox />
      </Link>
      </button> 
      <button  value="Following" className= {selected === "Following" ? selectedClass : defaultClass} onClick={(e)=>{setSelected(e.currentTarget.value)}}>
      <Link to="/Following">
      <Following />
      </Link>
      </button> 
      <div className="bg-purple-700 px-3 min-h-16 bg-stone-900 ">
        <div className="mt-4 pt-64 ">
<Settings />
</div>
      </div>
    </div>
    )
}

export default List;