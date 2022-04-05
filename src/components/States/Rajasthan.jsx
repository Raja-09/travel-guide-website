import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Rajasthan() {
  const name = "Rajasthan";
  const image =
    "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2021/06/27/857610-rajasthan-unlock.gif";

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

export default Rajasthan;
