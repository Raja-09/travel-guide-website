import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";
import KarnatakaImage from "../../videos/Karnataka.png";

function Karnataka() {
  return (
    <div>
      <StatePage
        stateName="Karnataka"
        stateImage={KarnatakaImage}
        stateDesc={
          <div className="state-desc">
            <span>
              {" "}
              A stunning introduction to southern India, Karnataka is a
              prosperous, compelling state loaded with a winning blend of urban
            </span>
            <span>
              cool, glittering palaces, national parks, ancient ruins, beaches,
              yoga centres and legendary travelers' hang-outs.
            </span>
          </div>
        }
        placeVisit={["Bangalore", "Mysore", "Hampi"]}
      />
    </div>
  );
}

export default Karnataka;
