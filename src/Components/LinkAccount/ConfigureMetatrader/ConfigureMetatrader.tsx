import VerticalLinearStepper from "./VerticalLinearStepper"

function ConfigureMetatrader(){
    return(
    <div className="h-full w-full grid grid-cols-[5fr_7fr]">
    <div className="h-full min-w-96 w-96 ">
            <iframe name="iframe1" className="custom-iframe" src="https://app.metaapi.cloud/sign-up?subscription=default"> </iframe> 
  </div>
  <div className="bg-stone-900 w-full h-full p-5">
<VerticalLinearStepper />
  </div>
    </div>
    
    )
}

export default ConfigureMetatrader