import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Goa() {
  const name = "Goa";
  const image =
    "https://im.indiatimes.in/content/2021/Aug/Goa-copy_61150ebf21bc6.jpg?w=1092&h=558&cc=1";

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

export default Goa;
