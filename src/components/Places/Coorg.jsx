import React from "react";
import PlacePage from "../PlacePage";

export default function Coorg() {
  const images = [
    "https://i.ytimg.com/vi/P_zQFDEXu_4/maxresdefault.jpg",
    "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1502167260/Hotel/Coorg/00009869/TheTamaraCoorg-exterior-view-of-cottages_qyMNqR.jpg",
    "https://www.tourmyindia.com/blog//wp-content/uploads/2015/11/best-things-to-do-in-coorg.jpg",
  ];
  const placeName = "Coorg";
  const stateName = "Karnataka";
  const placeImage = "https://static.toiimg.com/photo/48466026.cms";
  return (
    <div>
      <PlacePage
        placeName={placeName}
        id={placeName}
        stateName={stateName}
        placeDesc={
          <div className="place__desc">
            Nestled amid evergreen hills that line the southernmost edge of
            Karnataka is the luscious Kodagu (Coorg) region, gifted with emerald
            landscapes and hectares of plantations. A major centre for coffee
            and spice production, this rural expanse is also home to the Kodava
            people, who are divided into 1000 clans. The uneven terrain and cool
            climate make it a fantastic area for trekking, birdwatching or
            lazily ambling down little-trodden paths winding around carpeted
            hills. All in all, Kodagu is rejuvenation guaranteed
          </div>
        }
        imagesUrl={images}
        placeImage={placeImage}
      />
    </div>
  );
}
