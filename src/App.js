import React from "react";
import "./App.css";
import "office-ui-fabric-react/dist/css/fabric.css";
import {
  Stack,
  IStackTokens,
  PrimaryButton,
  mergeStyles,
  DefaultPalette
} from "office-ui-fabric-react";
export const App = () => {
  const stackTokens: IStackTokens = { childrenGap: 10, padding: 10 };
  const stackItemStyles = mergeStyles({
    color: DefaultPalette.white,
    height: 50,
    justifyContent: "center"
  });
  const menuProps: IContextualMenuProps = {
    items: [
      {
        key: "downloadResume",
        text: "Download",
        iconProps: { iconName: "Download" },
        href:
          "https://docs.google.com/document/d/1BznqXQj4gfePHGcsLsxOzmlkKX0cKMLh8ploQOkl0vw/export?format=doc"
      }
    ]
  };
  const showResume = () => {
    const doc = document.getElementById("expandDisplay");
    if (doc.style.maxHeight) {
      doc.style.maxHeight = null;
    } else {
      doc.style.maxHeight = doc.scrollHeight + "px";
    }
  };

  return (
    <div className="App">
      <h1>Daryk Kohler</h1>
      <Stack verticalAlign="space-evenly" tokens={stackTokens}>
        <div>
          <PrimaryButton
            split
            onClick={showResume}
            aria-expanded="false"
            className={stackItemStyles}
            menuProps={menuProps}
            iconProps={{ iconName: "WordDocument" }}
          >
            Resume
          </PrimaryButton>
        </div>
        <div id="expandDisplay">
          <iframe
            title="resumeDisplay"
            src="https://docs.google.com/document/d/1BznqXQj4gfePHGcsLsxOzmlkKX0cKMLh8ploQOkl0vw/preview"
            height="700"
            width="800"
            allowFullScreen
          />
        </div>
        <Stack horizontal horizontalAlign="center" tokens={stackTokens}>
          <PrimaryButton
            className={stackItemStyles}
            href="https://socmon.azurewebsites.net/"
            target="_blank"
            iconProps={{ iconName: "RedEye" }}
          >
            SocMon
          </PrimaryButton>
          <PrimaryButton
            className={stackItemStyles}
            href="https://www.linkedin.com/in/daryk-kohler/"
            target="_blank"
            iconProps={{ iconName: "LinkedInLogo" }}
          >
            LinkedIn
          </PrimaryButton>
          <PrimaryButton
            className={stackItemStyles}
            href="https://github.com/Ilithor"
            target="_blank"
            iconProps={{ iconName: "Database" }}
          >
            GitHub
          </PrimaryButton>
        </Stack>
      </Stack>
    </div>
  );
};
