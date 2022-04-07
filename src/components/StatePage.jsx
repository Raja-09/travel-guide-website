import React from "react";
import "./styles/StatePage.css";
import TitlebarBelowImageList from "./TitleBarBelowImageList";

function StatePage(props) {
  return (
    <div className="karnataka">
      <div className="state-container">
        <img className="state-image" src={props.stateImage} alt="" />
        <div className="state-heading">
          {props.stateName ? props.stateName : "StateName here"} • India
        </div>
        <div className="state-wrapper">
          <div className="state-desc">{props.stateDesc}</div>
          <div className="state-places">
            <div className="state-places-heading">
              Explore {props.stateName}{" "}
            </div>
            <div className="state-places-list">
              <TitlebarBelowImageList itemData={props.visitLocationsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatePage;
