import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";
import KarnatakaImage from "../../videos/Karnataka.png";

function Karnataka() {
  const visitLocationData = [
    {
      name: "Bangalore",
      image:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.86589769079!2d77.622290114897!3d12.924098795824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14c8f8f8f8f3%3A0x8f8f8f8f8f8f8f8f!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1574680109812!5m2!1sen!2sin",
      description: "Capital city of karnataka",
    },
  ];
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
        visitLocationsData={visitLocationData}
      />
    </div>
  );
}

export default Karnataka;
