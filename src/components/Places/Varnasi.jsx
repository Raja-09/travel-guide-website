import React from "react";
import PlacePage from "../PlacePage";

export default function Varnasi() {
  const images = [
    "https://blog.railyatri.in/wp-content/uploads/2018/11/Places-to-visit-in-Varanasi.png",
    "https://img.veenaworld.com/wp-content/uploads/2020/10/10-Best-Hotels-in-Varanasi-for-the-Perfect-Stay-scaled.jpg?imwidth=1080",
    "https://static.toiimg.com/photo/74304188/v1.jpg?width=748&resize=4",
    "https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743813041-T7KWW8KZQOE546ZMLNJH/image-asset.jpeg?format=1000w",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/229514974.jpg?k=9b21d86384bcbde5fdc9089bfc77610aa4bfed0dbb2f6230f79c37192615eed3&o=&hp=1",
  ];
  const placeName = "Varnasi";
  const stateName = "Uttar Pradesh";
  const placeImage =
    "https://www.iwmbuzz.com/wp-content/uploads/2021/05/varanasi-the-country-of-gods-a-must-visit-pilgrimage-that-will-change-the-way-you-live.jpg";
  return (
    <div style={{ height: "2300px" }}>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div className="place__desc">
            The great Hindu city of Varanasi, also known as Banaras or Benares,
            stretches along the River Ganges, its waterfront dominated by long
            flights of stone ghats where thousands of pilgrims and residents
            come for their daily ritual ablutions. Known to the devout as Kashi,
            the Luminous – the City of Light, founded by Shiva – Varanasi is one
            of the oldest living cities in the world. It has maintained its
            religious life since the sixth century BC in one continuous
            tradition, in part by remaining outside the mainstream of political
            activity and historical development of the Subcontinent, and stands
            at the centre of the Hindu universe.
            <p>
              <hr />
              Located next to a ford on an ancient trade route, Varanasi is
              among the holiest of all tirthas – “crossing places”, that allow
              the devotee access to the divine and enable gods and goddesses to
              come down to earth. It has attracted pilgrims, seekers, sannyasins
              and students of the Vedas throughout its history, including sages
              such as Buddha, Mahavira (founder of the Jain faith) and the great
              Hindu reformer Shankara.
            </p>
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
