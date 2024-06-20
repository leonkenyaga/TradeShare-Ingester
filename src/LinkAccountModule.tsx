import ConfigurePlatform from "./ConfigurePlatform";
import { ParentModule } from "./MainModule";
import { ChildModule2 } from "./MainModule";

function LinkAccountModule(){

    return(
   <ParentModule>
   <ConfigurePlatform />
   <ChildModule2>
    Linking steps
   </ChildModule2>
   </ParentModule>
       
    )
}
    
    export default LinkAccountModule;