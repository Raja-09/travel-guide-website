import React from "react";

function PlacePage(props) {
  return (
    <div className="placePage">
      <div className="place-container">
        <div className="place-heading">
          {props.placeName ? props.placeName : "PlaceName here"} •{" "}
          {props.stateName} • India
        </div>
      </div>
    </div>
  );
}

export default PlacePage;
