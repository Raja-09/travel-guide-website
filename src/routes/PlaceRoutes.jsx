import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Varnasi from "../components/Places/Varnasi";
import TajMahal from "../components/Places/TajMahal";
import ElloraCaves from "../components/Places/ElloraCaves";
import Coorg from "../components/Places/Coorg";
import Shimla from "../components/Places/Shimla";
import {
  AmberFort,
  CityPalace,
  HawaPalace,
  Manali,
  Munnar,
  RedFort,
} from "../components/Places/PlacesComponent";

function PlaceRoutes() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/places/taj mahal">
            <TajMahal />
          </Route>
          <Route exact path="/places/varnasi">
            <Varnasi />
          </Route>
          <Route exact path="/places/ellora caves">
            <ElloraCaves />
          </Route>
          <Route exact path="/places/coorg">
            <Coorg />
          </Route>
          <Route exact path="/places/shimla">
            <Shimla />
          </Route>
          <Route exact path="/places/munnar">
            <Munnar />
          </Route>
          <Route exact path="/places/manali">
            <Manali />
          </Route>
          <Route exact path="/places/amber fort">
            <AmberFort />
          </Route>
          <Route exact path="/places/hawa palace ">
            <HawaPalace />
          </Route>
          <Route exact path="/places/lotus temple"></Route>
          <Route exact path="/places/humayun's tomb"></Route>
          <Route exact path="/places/qutub minar"></Route>
          <Route exact path="/places/city palace"><CityPalace/></Route>
          <Route exact path="/places/red fort">
            <RedFort />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default PlaceRoutes;
