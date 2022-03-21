import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bangalore from "../components/Places/Bangalore";
import Mysore from "../components/Places/Mysore";
import Hampi from "../components/Places/Hampi";
import Varnasi from "../components/Places/Varnasi";
function PlaceRoutes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/places/bangalore"}>
            <Bangalore />
          </Route>
          <Route exact path="/places/mysore">
            <Mysore />
          </Route>
          <Route exact path="/places/hampi">
            <Hampi />
          </Route>
          <Route exact path="/places/varnasi">
            <Varnasi />
          </Route>
          <Route exact path="/places/agra"></Route>
          <Route exact path="/places/amritsar"></Route>
          <Route exact path="/places/delhi"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default PlaceRoutes;
