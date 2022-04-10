import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import "./styles/SavedPlaces.css";
import RemoveIcon from "@mui/icons-material/Remove";
import { auth, db } from "../firebase.js";
import { Tooltip } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";

function SavedPlaces() {
  const [{ cart }, dispatch] = useStateValue();
  const [user] = useAuthState(auth);
  const [places, setPlaces] = React.useState(cart);
  const removePlace = (did) => {
    db.collection("users")
      .doc(user?.uid)
      .collection("places")
      .where("id", "==", did)
      .get()
      .then((query) => {
        query.docs.forEach((doc) => {
          doc.ref.delete();
        });
      });
  };
  useEffect(() => {
    db.collection("users")
      .doc(user?.uid)
      .collection("places")
      .orderBy("AddedAt")
      .onSnapshot((snapshot) => {
        const newplaces = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        for (let i = 0; i < newplaces.length; i++) {
          for (let j = 0; j < newplaces.length; j++) {
            if (newplaces[i].id === newplaces[j].id && i !== j) {
              newplaces.splice(i, 1);
            }
          }
        }
        setPlaces(newplaces);
        console.log(newplaces);
      });
  }, []);

  return (
    <div className="savedPlaces">
      <div className="savedPlacesLeft">
        {places.map((item) => {
          return (
            <div className="savedPlacesContainer" key={item.heading}>
              <h4 className="savedPlaceHeading">{item.heading} • India</h4>
              <div className="wrap2">
                <div className="image">
                  <img
                    className="savedPlaceImage"
                    src={item.image}
                    alt={item.heading}
                  />
                </div>
                <div className="text">{item.text}</div>
                <Tooltip title="Remove from favorites">
                  <div
                    className="remove btn btn-danger btn-sm"
                    onClick={() => {
                      removePlace(item.id);
                    }}
                  >
                    <RemoveIcon />
                  </div>
                </Tooltip>
              </div>
            </div>
          );
        })}
      </div>
      <div className="savedPlacesRight">
        <ul>
          {cart.map((item) => {
            return <li key={item.title}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SavedPlaces;
