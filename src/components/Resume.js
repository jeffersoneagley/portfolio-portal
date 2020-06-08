import React from "react";
import "./style.css";

export const Resume = () => (
  <div id="expandDisplayResume">
    <iframe
      title="resumeDisplayResumePageOne"
      src="https://drive.google.com/file/d/1OTc6vUCHjgUu7Wa8vQ_qc6gg8164R-f6/preview"
      height="650"
      width={window.innerWidth / 2}
    />
    <iframe
      title="expandDisplayResumePageTwo"
      src="https://drive.google.com/file/d/1CvmXq_FAA331kCfbP9MTQz4OqV3eHM-F/preview"
      height="650"
      width={window.innerWidth / 2}
    />
  </div>
);
