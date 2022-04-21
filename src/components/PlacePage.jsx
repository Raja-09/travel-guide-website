import React from "react";
import MasonryImageList from "./mui/PlaceImages";
import "./styles/PlacePage.css";
import { auth, db } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function PlacePage(props) {
  const [user] = useAuthState(auth);
  const pushData = () => {
    db.collection("users").doc(user?.uid).collection("places").add({
      id: props.placeName,
      heading: props.placeName,
      image: props.placeImage,
      text: props.placeDesc,
      AddedAt: new Date(),
    });
    console.log("pushing data");
  };
  const addToCart = () => {
    pushData();
  };
  return (
    <div className="place">
      <div className="state-container">
        <img className="state-image" src={props.placeImage} alt="" />
        <div className="state-heading">
          {props.placeName ? props.placeName : "StateName here"} •{" "}
          {props.stateName ? props.stateName : "StateName here"}{" "}
        </div>
        <div className="state-wrapper">
          <button
            className="btn btn-primary btn-sm mx-5 mt-5 float"
            onClick={addToCart}
          >
            Add to favorites
          </button>
          <div className="state-desc">{props.placeDesc}</div>
          <div className="state-places">
            <div className="state-places-heading">
              Few images of {props.placeName}
              <hr />
            </div>
            <div className="placesList">
              <MasonryImageList imagesList={props.imagesUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacePage;
