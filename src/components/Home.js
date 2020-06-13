import React from "react";

export const Home = () => {
  return (
    <div>
      <h2>
        <i>ATTENTION:</i>
      </h2>
      <strong>
        This website is currently being hosted on the Azure Static Apps
        platform, which is still fairly new on the Azure portal. At this time,
        it cannot yet support both frontend routing and access to images in the
        public folder. All other functionalities works as intended.{" "}
      </strong>
    </div>
  );
};
