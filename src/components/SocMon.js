import React from "react";
import { PrimaryButton } from "office-ui-fabric-react";
import "./style.css";

/** Renders the SocMon component
 *
 * @returns {React.FunctionComponent}
 */
export const SocMon = () => (
  <div>
    <PrimaryButton
      className="primaryButton"
      href="https://www.socmon.azurewebsites.net/"
      target="_blank"
    >
      SocMon
    </PrimaryButton>
    <p>Built a social media site.</p>
    <p>
      Note: Has occasional hiccups due to limitations from the database because
      of a lack of funds.
    </p>
    <img
      src={process.env.PUBLIC_URL + "/socmonscreenshot.png"}
      alt="SocMonScreenShot"
      height="650"
      width={window.innerWidth}
    />
  </div>
);
