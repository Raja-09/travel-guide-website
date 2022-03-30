import React from "react";
import { useHistory } from "react-router-dom";
import ActionAreaCard from "./ActionAreaCard";
import "./styles/Places.css";
function Places() {
  const history = useHistory();
  const places = [
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
  ];

  return (
    <div className="places">
      {places.map((item) => (
        <div
          key={item.name}
          className="cards"
          onClick={() => history.push(`/places/${item.name.toLowerCase()}`)}
        >
          <ActionAreaCard
            heading={item.name}
            image={item.image}
            text={item.description}
          />
        </div>
      ))}
    </div>
  );
}

export default Places;
