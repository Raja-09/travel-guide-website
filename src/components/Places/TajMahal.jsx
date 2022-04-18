import React from "react";
import PlacePage from "../PlacePage";

export default function TajMahal() {
  const images = [
    "https://www.iwmbuzz.com/wp-content/uploads/2021/05/varanasi-the-country-of-gods-a-must-visit-pilgrimage-that-will-change-the-way-you-live.jpg",
    "https://www.iwmbuzz.com/wp-content/uploads/2021/05/varanasi-the-country-of-gods-a-must-visit-pilgrimage-that-will-change-the-way-you-live.jpg",
    "https://www.iwmbuzz.com/wp-content/uploads/2021/05/varanasi-the-country-of-gods-a-must-visit-pilgrimage-that-will-change-the-way-you-live.jpg",
  ];
  const placeName = "Taj Mahal";
  const stateName = "Uttar Pradesh";
  const placeImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/2560px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet alias
            aperiam blanditiis temporibus rerum doloribus consequuntur hic
            dolores, voluptatum perferendis nobis beatae, sapiente omnis
            similique dolorum qui soluta voluptate maiores. Repudiandae
            doloremque sequi atque beatae molestiae sint tempore aspernatur
            cumque. Delectus nesciunt blanditiis laborum vel, aliquam
            dignissimos quidem voluptas earum!
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
