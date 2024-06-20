import * as React from 'react';

import { PopupPlacement, Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';


function AddAccount(){
    
    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

    const placement: PopupPlacement = 'right';
   
  
    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;

    return(
        <div>
      <a aria-describedby={id} type="button" onMouseOver={(e)=>{setAnchor(e.currentTarget)}} onMouseOut={()=>{setAnchor(null)}} className="flex items-center text-gray-900 rounded-lg dark:text-white group">
        <svg className="w-5 h-10 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
        </svg>
     
         
        </a>
        <BasePopup id={id} open={open} anchor={anchor} placement={placement} offset={8}>
   <div className='bg-stone-900 p-2 border-2 rounded-xl border-TradeSharegray'> AddAccount</div>
 </BasePopup>
        </div>
    )
}

export default AddAccount





