import React from "react";
import PlacesJSON from "../../PlacesJSON";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Maharashtra() {
  const name = "Maharashtra";
  const image =
    "https://img.etimg.com/thumb/width-1200,height-575,imgsize-154635,resizemode-1,msid-81997160/news/india/maharashtra-mulling-full-lockdown-for-at-least-a-wk.jpg";
  const arr = ["Ellora Caves"];
  const visitLocationsData = PlacesJSON.filter((place) =>
    arr.includes(place.name)
  );
  return (
    <div>
      <StatePage
        stateName={name}
        stateImage={image}
        visitLocationsData={visitLocationsData}
        stateDesc={
          <div className="state-desc">
            <span>
              {" "}
              State Description goes here <br />
              State Description goes here
            </span>
            <span>
              State Description goes here
              <br />
              State Description goes here
            </span>
          </div>
        }
      />
    </div>
  );
}

export default Maharashtra;
