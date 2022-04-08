import AlertDialog from "./mui/AlertDialog.jsx";
import React, { useState } from "react";
import StyledMenu from "./mui/StyledMenu";
import { useHistory } from "react-router-dom";
import "./styles/Places.css";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import "./styles/Home.css";
import "firebase/compat/firestore";
import RecipeReviewCard from "./mui/ActionAreaCard";
import FreeSolo from "./mui/FreeSolo";
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}
function Places() {
  const [user] = useAuthState(auth);
  const history = useHistory();
  const forceUpdate = useForceUpdate();
  const [places, setPlaces] = React.useState([
    {
      name: "Taj Mahal",
      description:
        "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor, Shah Jahan (reigned from 1628 to 1658), to house the tomb of his favourite wife, Mumtaz Mahal.",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Varnasi",
      description:
        "Varnasi is a hill station in the Indian state of Kerala. It is located in the Varnasi district of the state of Kerala. It is the administrative headquarters of the Varnasi district. Varnasi is a hill station in the Indian state of Kerala. It is located in the Varnasi district of the state of Kerala. It is the administrative headquarters of the Varnasi district.",
      image:
        "https://www.planetware.com/wpimages/2020/02/india-varanasi-best-places-to-visit-ganges-river.jpg",
    },
    {
      name: "Ellora Caves",
      description:
        "Ellora Caves is a cave system located in the Ellora region of Kerala, India. It is a part of the Ellora National Park, a UNESCO World Heritage Site. The caves are located in the Ellora National Park, a UNESCO World Heritage Site. The caves are located in the Ellora National Park, a UNESCO World Heritage Site.",
      image:
        "https://assets.suitcasemag.com/images/hero_mobile/246729-india-ellora-caves.jpg",
    },
    {
      name: "Coorg",
      description:
        "Coorg is a hill station in the Indian state of Kerala. It is located in the Varnasi district of the state of Kerala. It is the administrative headquarters of the Varnasi district. Coorg is a hill station in the Indian state of Kerala. It is located in the Varnasi district of the state of Kerala. It is the administrative headquarters of the Varnasi district.",
      image:
        "https://images.unsplash.com/flagged/photo-1592544858330-7ac10a0468e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vcmd8ZW58MHx8MHx8&w=1000&q=80",
    },
    {
      name: "Udaipur",
      description:
        "Udaipur has a romance of setting unmatched in Rajasthan and arguably in all India – snuggling beside tranquil Lake Pichola, with the purple ridges of the Aravalli Range stretching away in every direction.",
      image:
        "https://www.tripsavvy.com/thmb/saxdtK__W0j14gkQ2tEjjAkEB-Y=/2121x1414/filters:fill(auto,1)/GettyImages-956035876-76efc27d14d24032a3f3d1fcefdc4413.jpg",
    },
    {
      name: "Shimla",
      description:
        "Among the top hill stations in Himachal, Shimla derives its name from 'Goddess Shyamala', an incarnation of Goddess Kali. Kali Bari Temple, Annandale, Vice Regal Lodge, Jakhu Temple / Jakhu Hill, The Mall, Tara Devi Temple, Christ Church, and Kalka - Shimla Railway are some of the best tourist places in Shimla.",
      image:
        "https://static.theprint.in/wp-content/uploads/2018/10/Shimla.jpg?compress=true&quality=80&w=376&dpr=2.6",
    },
    {
      name: "Munnar",
      description:
        "The rolling hills around Munnar, South India's largest tea-growing region, are carpeted in emerald-green tea plantations, contoured, clipped and sculpted like ornamental hedges.",
      image:
        "https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Munnar-In-December-cover_22nd-Nov.jpg",
    },
    {
      name: "Manali",
      description:
        "With mountain adventures beckoning from all directions, Manali is a year-round magnet",
      image:
        "https://www.adotrip.com/public/images/city/master_images/60fea3d330d04-Manali_in_Himachal_Pradesh.jpg",
    },
    { name: "", description: "", image: "" },
  ]);

  const sortAscending = () => {
    const sortedArr = places.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa < fb) return -1;
      if (fa > fb) return 1;
      return 0;
    });
    setPlaces(sortedArr);
    forceUpdate();
  };
  const sortDescending = () => {
    const sortedArr = places.sort((a, b) => {
      let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();
      if (fa > fb) return -1;
      if (fa < fb) return 1;
      return 0;
    });
    setPlaces(sortedArr);
    forceUpdate();
  };
  if (user)
    return (
      <div className="places">
        <div className="header">
          <div className="search">
            <FreeSolo list={places} />
          </div>
          <div className="sortMenu">
            <StyledMenu
              handleSortA={sortAscending}
              handleSortS={sortDescending}
            />
          </div>
        </div>
        <div className="placeCards">
          {places.map((item) => (
            <div key={item.name} id={item.name} className="cards">
              <RecipeReviewCard
                heading={item.name}
                key={Math.random()}
                image={item.image}
                text={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    );
  else
    return (
      <div className="pls-login">
        <AlertDialog
          heading="Login Required"
          exit="Quit"
          confirmText="Proceed to Login Page"
          text="Please login to continue to view Places and Destinations"
          main={() => {
            history.push("/login");
          }}
          quit={() => {
            history.push("/");
          }}
        />
      </div>
    );
}

export default Places;
