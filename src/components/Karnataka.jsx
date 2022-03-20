import React from "react";
import StatePage from "./StatePage";
import KarnatakaImage from "../videos/Karnataka.png";

function Karnataka() {
  //places to visit in bangalore
  return (
    <div>
      <StatePage
        stateName="Karnataka"
        stateImage={KarnatakaImage}
        stateDesc="This is a state in india with the capital of Bangalore "
        placeVisit={["Bangalore", "Mysore", "Mangalore"]}
      />
    </div>
  );
}

export default Karnataka;
