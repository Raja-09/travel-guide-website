import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Maharashtra() {
  const name = "Maharashtra";
  const image =
    "https://img.etimg.com/thumb/width-1200,height-575,imgsize-154635,resizemode-1,msid-81997160/news/india/maharashtra-mulling-full-lockdown-for-at-least-a-wk.jpg";

  const visitLocationsData = [
    {
      name: "place name",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      desc: "Description of the place",
    },
  ];
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
