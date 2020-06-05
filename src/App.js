import React from "react";
import "./App.css";
import { Stack, IStackTokens, PrimaryButton } from "office-ui-fabric-react";

export const App = () => {
  const stackTokens: IStackTokens = { childrenGap: 20 };
  return (
    <div className="App">
      <h2>Daryk Kohler</h2>
      <Stack horizontalAlign="center" tokens={stackTokens}>
        <PrimaryButton
          href="https://socmon.azurewebsites.net/"
          target="_blank"
          iconProps={{ iconName: "RedEye" }}
        >
          SocMon
        </PrimaryButton>
        <PrimaryButton
          href="https://www.linkedin.com/in/daryk-kohler/"
          target="_blank"
          iconProps={{ iconName: "LinkedInLogo" }}
        >
          LinkedIn
        </PrimaryButton>
        <PrimaryButton
          href="https://github.com/Ilithor"
          target="_blank"
          iconProps={{ iconName: "Database" }}
        >
          GitHub
        </PrimaryButton>
      </Stack>
    </div>
  );
};
