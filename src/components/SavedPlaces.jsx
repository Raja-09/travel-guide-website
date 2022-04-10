import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useStateValue } from "../StateProvider";
import "./styles/SavedPlaces.css";
function SavedPlaces() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div>
      {cart.map((item) => {
        return (
          <div className="SavedPlacesContainer">
            <h4 className="savedPlaceHeading">{item.title} • India</h4>
            <div className="wrap2">
              <div className="image">
                <img
                  className="savedPlaceImage"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="text">{item.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SavedPlaces;
