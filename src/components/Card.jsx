import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/Card.css";

function Card(props) {
  const history = useHistory();
  const handleView = (name) => {
    history.push(`/home/${name.toLowerCase()}`);
  };
  return (
    <div className="card m-4 p-1">
      <div>
        <img src={props.photoUrl} alt="" className="cardImage" />
      </div>
      <div className="cardName">{props.name}</div>
      <div className="cardDesc">{props.description}</div>

      <Button
        className="viewButton"
        variant="contained"
        onClick={() => handleView(props.name)}
      >
        View
      </Button>
    </div>
  );
}

export default Card;
