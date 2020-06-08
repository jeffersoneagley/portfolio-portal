import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import "./style.css";

export const SocMon = () => {
  return (
    <div id="expandDisplaySocMon">
      <PrimaryButton
        id="socMonPrimaryLink"
        href="https://www.socmon.azurewebsites.net/"
      >
        SocMon
      </PrimaryButton>
      <p>Built a social media site.</p>
      <p>
        Note: Has occasional hiccups due to limitations from database because of
        a lack of funds.
      </p>
      <img
        src={process.env.PUBLIC_URL + "/socmonscreenshot.png"}
        alt="SocMonScreenShot"
        height="650"
        width={window.innerWidth}
      />
    </div>
  );
};
