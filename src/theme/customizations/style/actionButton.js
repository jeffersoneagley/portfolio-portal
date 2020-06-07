/** Generator for customizations for split buttons
 *
 * @param {import('office-ui-fabric-react').ITheme} theme
 * @returns {import('office-ui-fabric-react').IButtonStyles}
 */
export const actionButtonStyles = theme => {
  return {
    root: {
      background: "transparent",
      border: 0
    },
    splitButtonMenuButton: {
      border: 0,
      background: "transparent",
      color: theme.semanticColors.buttonText,
      selectors: {
        ":hover": {
          background: theme.palette.whiteTranslucent40
        }
      }
    }
  };
};
