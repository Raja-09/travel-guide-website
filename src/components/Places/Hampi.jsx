import React from 'react'
import PlacePage from '../PlacePage'

export default function Hampi() {
    const images = ["","",""]
    const placeName = "Hampi"
  return (
    <div>
        <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={"Karantaka"}
        placeDesc={<div>Hello world i am {placeName}</div>}
        imagesUrl = {images}
      />
    </div>
  )
}
