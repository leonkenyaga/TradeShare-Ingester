import * as React from 'react';

import { PopupPlacement, Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

function Home(){

    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);

    const placement: PopupPlacement = 'right';
   
  
    const open = Boolean(anchor);
    const id = open ? 'simple-popper' : undefined;
return(
<div>
<a aria-describedby={id} type="button" onMouseOver={(e)=>{setAnchor(e.currentTarget)}} onMouseOut={()=>{setAnchor(null)}} className="flex items-center text-gray-900 rounded-lg dark:text-white  group ">
    <svg className="w-5 h-10 text-gray-500 transition duration-75 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
       <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
       <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
    </svg>
 </a>
 <BasePopup id={id} open={open} anchor={anchor} placement={placement} offset={4}>
   <div className='bg-stone-900 p-2 border-2 rounded-xl border-TradeSharegray'> Home </div>
 </BasePopup>
</div>
)
}

export default Home