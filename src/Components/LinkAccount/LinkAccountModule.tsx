import ConfigurePlatform from "./ConfigurePlatform";
import { ParentModule } from "../MainModule";
import { ChildModule2 } from "../MainModule";

function LinkAccountModule() {
  return (
    <ParentModule>
      <ConfigurePlatform />
      <ChildModule2>
        <a href="https://app.metaapi.cloud/sign-up?subscription=default">
          {" "}
          link
        </a>
      </ChildModule2>
    </ParentModule>
  );
}

export default LinkAccountModule;
