import { actionButtonStyles } from "./style/actionButton";
import { commandBarButtonStyles } from "./style/commandBarButton";

/**
 *
 * @param {import('office-ui-fabric-react').ITheme} theme
 * @returns {{[key:string]:import('office-ui-fabric-react').ISettings}}
 */
export const makeScopedSettings = theme => ({
  ActionButton: {
    styles: actionButtonStyles(theme)
  },
  CommandBarButton: {
    styles: commandBarButtonStyles(theme)
  }
});
