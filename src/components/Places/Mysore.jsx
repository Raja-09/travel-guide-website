import React from 'react'
import PlacePage from '../PlacePage'

function Mysore() {
    const images = ["","",""]
    const placeName = "Mysore"
  return (
    <div>
        <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={"Karantaka"}
        placeDesc={<div>Hello world i am Mysore</div>}
        imagesUrl = {images}
      />
    </div>
  )
}

export default Mysore