import React from "react";
import "./style.css";
import { PrimaryButton } from "office-ui-fabric-react";

export const Resume = () => (
  <div>
    <div>
      <PrimaryButton
        className="primaryButton"
        href="https://docs.google.com/document/d/1BznqXQj4gfePHGcsLsxOzmlkKX0cKMLh8ploQOkl0vw/export?format=doc"
      >
        Download Document
      </PrimaryButton>
    </div>
    <img
      alt="Resume Page 1"
      src={process.env.PUBLIC_URL + "/resumepage1.png"}
    />
    <img
      alt="Resume Page 2"
      src={process.env.PUBLIC_URL + "/resumepage2.png"}
    />
  </div>
);
