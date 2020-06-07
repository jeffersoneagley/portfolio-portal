import { actionButtonStyles } from "./actionButton";

/** Generator for customizations for split buttons
 *
 * @param {import('office-ui-fabric-react').ITheme} theme
 * @returns {import('office-ui-fabric-react').IButtonStyles}
 */
export const commandBarButtonStyles = theme => {
  return actionButtonStyles(theme);
};
