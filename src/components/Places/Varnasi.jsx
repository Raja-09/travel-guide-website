import React from "react";
import PlacePage from "../PlacePage";

export default function Varnasi() {
  const images = ["", "", ""];
  const placeName = "Varnasi";
  const stateName = "Uttar Pradesh";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={<div>Hello world i am {placeName}</div>}
        imagesUrl={images}
      />
    </div>
  );
}
