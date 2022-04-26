import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";
import KarnatakaImage from "../../videos/Karnataka.png";
import PlacesJSON from "../../PlacesJSON";

function Karnataka() {
  const arr = ["Coorg","Bandipur National Park","Hampi"];
  const visitLocationData = PlacesJSON.filter((place) =>
    arr.includes(place.name)
  );
  return (
    <div style={{height:"1600px"}}>
      <StatePage
        stateName="Karnataka"
        stateImage={KarnatakaImage}
        stateDesc={
          <div className="place__desc">
            <span>
              {" "}
              A stunning introduction to southern India, Karnataka is a
              prosperous, compelling state loaded with a winning blend of urban
              cool, glittering palaces, national parks, ancient ruins, beaches,
              yoga centres and legendary travelers' hang-outs.
            </span>
            <p>
              <hr />
              At its nerve centre is the capital, Bengaluru (Bangalore), a
              progressive cybercity famous for its craft-beer and restaurant
              scene. Heading out of town you'll encounter the evergreen rolling
              hills of Kodagu, dotted with spice and coffee plantations, the
              regal splendour of Mysuru (Mysore), and jungles teeming with
              monkeys, tigers and Asia’s biggest population of elephants.
              <br />
              If that all sounds too mainstream, head to the countercultural
              enclave of tranquil Hampi, with hammocks, psychedelic sunsets and
              boulder-strewn ruins. Or the blissful, virtually untouched
              coastline around Gokarna, blessed with beautiful coves and empty
              sands. Or leave the tourist trail behind entirely and take a
              journey to the evocative Islamic ruins of northern Karnataka.
            </p>
          </div>
        }
        visitLocationsData={visitLocationData}
      />
    </div>
  );
}

export default Karnataka;
