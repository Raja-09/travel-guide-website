import React from "react";
import PlacePage from "../PlacePage";

export default function TajMahal() {
  const images = [
    "https://www.tajmahal.gov.in/images/nightview.jpg",
    "https://lp-cms-production.imgix.net/2022-02/India%20Agra%20%C2%A9%20SasinTipchai%20shutterstock_1036002985.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
    "https://images.theconversation.com/files/228805/original/file-20180723-189308-12b3agf.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C5722%2C2856&q=45&auto=format&w=1356&h=668&fit=crop",
    "https://images.thrillophilia.com/image/upload/s--3pJ1AKgo--/c_fill,h_775,q_auto,w_1600/f_auto,fl_strip_profile/v1/images/photos/000/171/617/original/1568966645_Taj_Mahal_Sunset.jpg.jpg?1568966645",
  ];
  const placeName = "Taj Mahal";
  const stateName = "Uttar Pradesh";
  const placeImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/2560px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg";
  return (
    <div style={{ height: "1900px" }}>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div className="place__desc">
            The Taj Mahal rises from Agra's haze as though from a dream. You’ve
            seen it in pictures, but experiencing it in person, you'll
            understand that it's not just a famous monument, but a love poem
            composed of stone. When you first glimpse it through the arched
            entryway, you might find yourself breathless with awe. Many hail it
            as the most beautiful building on the planet.
            <hr />
            <p>
              But Agra, situated along the Yamuna River in the state of Uttar
              Pradesh, is more than a one-sight town. For 130 years, this was
              the centre of India’s great Mughal empire, and its legacy lives on
              in beautiful artwork, mouthwatering cuisine and magnificent
              architecture. The Taj is one of three places here that have been
              awarded Unesco World Heritage status, along with the immense Agra
              Fort and the sprawling palace complex of Fatehpur Sikri, which
              together make a superb trio of top-drawer sights.F
            </p>
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
