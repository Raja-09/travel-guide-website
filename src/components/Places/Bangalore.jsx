import React from "react";
import PlacePage from "../PlacePage";
function Bangalore() {
    const images = ["","",""]
  return (
    <div>
      <PlacePage
        placeName={"Bangalore"}
        id={"Bangalore"}
        stateName={"Karantaka"}
        placeDesc={<div>Hello world i am bangalore</div>}
        imagesUrl = {images}
      />
    </div>
  );
}

export default Bangalore;
