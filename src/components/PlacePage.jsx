import React from "react";
import MasonryImageList from "./mui/PlaceImages";
import './styles/PlacePage.css';

function PlacePage(props) {
  return (
    <div className="place">
      <div className="state-container">
        <img className="state-image" src={props.placeImage} alt="" />
        <div className="state-heading">
          {props.placeName ? props.placeName : "StateName here"} • {props.stateName ? props.stateName : "StateName here"}
        </div>
        <div className="state-wrapper">
          <div className="state-desc">{props.placeDesc}</div>
          <div className="state-places">
            <div className="state-places-heading">
              Few images of {props.placeName}
              <hr />
            </div>
            <div className="placesList">
              <MasonryImageList imagesList={props.imagesUrl}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacePage;
