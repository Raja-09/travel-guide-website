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
import { Alert } from "@mui/material";
import PlacesJSON from "../PlacesJSON.js";
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}
function Places() {
  const [user] = useAuthState(auth);
  const history = useHistory();
  const forceUpdate = useForceUpdate();
  const arr = PlacesJSON;
  const [places, setPlaces] = React.useState(PlacesJSON);

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
                key={item.name}
                image={item.image}
                text={item.description}
                id={item.name}
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
