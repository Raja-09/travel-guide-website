import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function UttarPradesh() {
  const name = "Uttar Pradesh";
  const image =
    "https://cms.qz.com/wp-content/uploads/2017/10/rtxbq82-e1507326487281.jpg?quality=75&strip=all&w=1200&h=600&crop=1";

  const visitLocationsData = [
    {
      name: "Taj Mahal, Agra",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      desc: "Taj mahal is the wonder of the world",
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

export default UttarPradesh;
