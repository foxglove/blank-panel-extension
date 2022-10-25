import { PanelExtensionContext } from "@foxglove/studio";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Blank from "./Blank";

export function initPanel(context: PanelExtensionContext): void {
  ReactDOM.render(
    <StrictMode>
      <Blank context={context} />
    </StrictMode>,
    context.panelElement,
  );
}
