import * as React from 'react';

import { PopupPlacement, Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

function Following(){

    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

    const placement: PopupPlacement = 'right';
   
  
    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    return(
        <div>
      <a aria-describedby={id} type="button" onMouseOver={(e)=>{setAnchor(e.currentTarget)}} onMouseOut={()=>{setAnchor(null)}} className="flex items-center text-gray-900 rounded-lg dark:text-white group">
        <svg className="flex-shrink-0 w-5 h-10 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
           <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
        </svg>
     </a>
     <BasePopup id={id} open={open} anchor={anchor} placement={placement} offset={4}>
   <div className='bg-stone-900 p-2 border-2 rounded-xl border-TradeSharegray'>Following</div>
 </BasePopup>
        </div>
  
    )
}

export default Following