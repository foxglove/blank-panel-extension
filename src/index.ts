import { ExtensionContext } from "@foxglove/studio";

import { initPanel } from "./BlankPanel";

export function activate(extensionContext: ExtensionContext): void {
  extensionContext.registerPanel({ name: "Blank", initPanel });
}
