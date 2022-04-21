import React from "react";
import StatePage from "../StatePage";
import "../styles/StatePage.css";
import PlacesJSON from "../../PlacesJSON";

function HimachalPradesh() {
  const arr = ["Manali", "Shimla"];
  const visitLocationData = PlacesJSON.filter((place) =>
    arr.includes(place.name)
  );
  return (
    <div>
      <StatePage
        stateName="Himachal Pradesh"
        stateImage={"https://photos.tpn.to/mm/fo/hq/rr/1600x900.jpg"}
        stateDesc={
          <div className="place__desc">
            <span>
              {" "}
              With spectacular snowy peaks and plunging river valleys, beautiful
              Himachal is India’s outdoor adventure playground. From trekking
              and climbing to rafting, paragliding and skiing, if it can be done
              in the mountains, it can be done here. A convoluted topography of
              interlocking mountain chains also makes Himachal a spectacular
              place simply to explore, by bus, car, motorbike, jeep or foot.
              Every pass crossing into a new valley brings you into a different
              culture, with its own deities and language.
            </span>
          </div>
        }
        visitLocationsData={visitLocationData}
      />
    </div>
  );
}

export default HimachalPradesh;
