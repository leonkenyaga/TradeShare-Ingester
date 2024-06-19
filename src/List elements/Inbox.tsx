import * as React from 'react';

import { PopupPlacement, Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

function Inbox(){

    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

    const placement: PopupPlacement = 'right';
   
  
    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    return (
<div>
<a aria-describedby={id} type="button" onMouseOver={(e)=>{setAnchor(e.currentTarget)}} onMouseOut={()=>{setAnchor(null)}} className="flex items-center text-gray-900 rounded-lg dark:text-white group">
        <svg className="flex-shrink-0 w-5 h-10 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
           <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
        </svg>
     
     </a>

     <BasePopup id={id} open={open} anchor={anchor} placement={placement} offset={4}>
   <div className='bg-stone-900 p-2 border-2 rounded-xl border-TradeSharegray'> Inbox </div>
 </BasePopup>
</div>

    )
}

export default Inbox