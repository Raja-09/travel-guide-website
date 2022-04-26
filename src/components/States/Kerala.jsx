import React from "react";
import PlacesJSON from "../../PlacesJSON";
import StatePage from "../StatePage";
import "../styles/StatePage.css";

function Kerala() {
  const name = "Kerala";
  const image =
    "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/2/4/w900X450/Alleppey.jpg?w=400&dpr=2.6";
  const arr = ["Munnar","Kochi","Varkala","Allepey"];
  const visitLocationsData = PlacesJSON.filter((place) =>
    arr.includes(place.name)
  );
  return (
    <div style = {{height:"1700px"}}>
      <StatePage
        stateName={name}
        stateImage={image}
        visitLocationsData={visitLocationsData}
        stateDesc={
          <div className="place__desc">
            <span>
              {" "}
              For many travelers, Kerala is South India's most serenely
              beautiful state. This slender coastal strip is defined by its
              layered landscape: almost 373 miles (600km) of glorious Arabian
              Sea coast and beaches; a languid network of glistening backwaters;
              and the spice- and tea-covered hills of the Western Ghats, dotted
              with fiercely protected wildlife reserves and cool hill stations
              such as Munnar. Just setting foot on this swathe of soul-soothing,
              palm-shaded green will slow your subcontinental stride to a
              blissed-out amble. Kerala is a world away from the hectic action
              of the rest of India, its long, fascinating backstory illuminated
              by historically evocative cities like Kochi (Cochin) and
              Thiruvananthapuram (Trivandrum).
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

export default Kerala;
