import ConfigurePlatform from "./ConfigurePlatform";
import { ParentModule } from "../MainModule";
import { ChildModule2 } from "../MainModule";
import { Outlet } from "@tanstack/react-router";

function LinkAccountModule() {
  return (
    <ParentModule>
      <ConfigurePlatform />
      <ChildModule2>
      <Outlet />
      </ChildModule2>
    </ParentModule>
  );
}

export default LinkAccountModule;
