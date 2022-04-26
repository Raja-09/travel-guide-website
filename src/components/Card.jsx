import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/Card.css";

function Card(props) {
  const history = useHistory();
  const handleView = (name) => {
    history.push(`/home/${name.toLowerCase()}`);
  };
  return (
    <div className="card m-4 p-1 homeCard" onClick={() => handleView(props.name)}>
      <div>
        <img src={props.photoUrl} alt="" className="cardImage" />
      </div>
      <hr />
      <div className="cardName">
        <b className="stateNameinCards">{props.name}</b>
      </div>
      <div className="cardDesc">{props.description}</div>
    </div>
  );
}

export default Card;
