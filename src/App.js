import React from "react";
import "./App.css";
import "office-ui-fabric-react/dist/css/fabric.css";
import { CommandBar, ICommandBarItemProps } from "office-ui-fabric-react";
import { useThemeData } from "./theme/themeContext";
export const App = () => {
  const { changeTheme } = useThemeData();
  const showResume = () => {
    const doc = document.getElementById("expandDisplay");
    if (doc.style.maxHeight) {
      doc.style.maxHeight = null;
    } else {
      doc.style.maxHeight = doc.scrollHeight + "px";
    }
  };

  const _items: ICommandBarItemProps[] = [
    {
      key: "resume",
      text: "Resume",
      iconProps: { iconName: "WordDocument" },
      onClick: () => showResume(),
      split: true,
      ariaLabel: "Resume",
      subMenuProps: {
        items: [
          {
            key: "downloadResume",
            text: "Download",
            iconProps: { iconName: "Download" },
            href:
              "https://docs.google.com/document/d/1BznqXQj4gfePHGcsLsxOzmlkKX0cKMLh8ploQOkl0vw/export?format=doc"
          }
        ]
      }
    },
    {
      key: "socmon",
      text: "SocMon",
      iconProps: { iconName: "RedEye" },
      href: '"https://socmon.azurewebsites.net/"',
      ariaLabel: "SocMon"
    },
    {
      key: "linkedin",
      text: "LinkedIn",
      iconProps: { iconName: "LinkedInLogo" },
      href: "https://www.linkedin.com/in/daryk-kohler/",
      ariaLabel: "LinkedIn"
    },
    {
      key: "github",
      text: "GitHub",
      iconProps: { iconName: "Database" },
      href: "https://github.com/Ilithor",
      ariaLabel: "GitHub"
    },
    {
      key: "darkTheme",
      onClick: () => changeTheme(),
      iconProps: { iconName: "ClearNight" },
      ariaLabel: "DarkTheme"
    }
  ];

  return (
    <div id="App">
      <h1>Daryk Kohler</h1>
      <div className="CommandBar">
        <CommandBar items={_items} />
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
    </div>
  );
};
