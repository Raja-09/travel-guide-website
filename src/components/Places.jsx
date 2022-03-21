import React from "react";
import { useHistory } from "react-router-dom";
function Places() {
  const arr = ["Bangalore", "Hampi", "Mysore", "Varnasi"];
  const history = useHistory();
  return (
    <div>
      {arr.map((item) => (
        <div
          className=""
          onClick={() => history.push(`/places/${item.toLowerCase()}`)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default Places;
