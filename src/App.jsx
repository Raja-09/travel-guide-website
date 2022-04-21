import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import ResponsiveAppBar from "./components/Navbar";
import Register from "./components/Register";
import Karnataka from "./components/States/Karnataka.jsx";
import Kerala from "./components/States/Kerala.jsx";
import PlaceRoutes from "./routes/PlaceRoutes.jsx";
import Places from "./components/Places";
import SavedPlaces from "./components/SavedPlaces";
import Rajasthan from "./components/States/Rajasthan";
import UttarPradesh from "./components/States/UttarPradesh";
import Goa from "./components/States/Goa";
import Maharashtra from "./components/States/Maharashtra";
import HimachalPradesh from "./components/States/HimachalPradesh";
import Footer from "./components/Footer";
import TestRegister from "./components/TestRegister";
import Map from "./components/Map";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
            <Footer />
          </Route>
          <Route path="/register">
            <ResponsiveAppBar />
            <TestRegister />
          </Route>
          <Route path="/home">
            <ResponsiveAppBar />
            <Route exact path={"/home"}>
              <Home />
              <Footer />
            </Route>
            <Route exact path={"/home/rajasthan"}>
              <Rajasthan />
              <Footer />
            </Route>
            <Route exact path={"/home/kerala"}>
              <Kerala />
              <Footer />
            </Route>
            <Route exact path={"/home/karnataka"}>
              <Karnataka />
              <Footer />
            </Route>
            <Route exact path={"/home/uttar pradesh"}>
              <UttarPradesh />
              <Footer />
            </Route>
            <Route exact path={"/home/goa"}>
              <Goa />
              <Footer />
            </Route>
            <Route exact path={"/home/maharashtra"}>
              <Maharashtra />
              <Footer />
            </Route>
            <Route exact path={"/home/himachal pradesh"}>
              <HimachalPradesh />
              <Footer />
            </Route>
          </Route>
          <Route exact path="/places">
            <ResponsiveAppBar />
            <Places />
            <Footer />
          </Route>
          <Route path="/places/*">
            <ResponsiveAppBar />
            <PlaceRoutes />
            <Footer />
          </Route>
          <Route path="/myplaces">
            <ResponsiveAppBar />
            <SavedPlaces />
            <Footer />
          </Route>
          <Route path="/profile">
            <ResponsiveAppBar />
            <Profile />
            <Footer />
          </Route>
          <Route path="/test"></Route>
          <Route path="/">
            <ResponsiveAppBar />
            <Welcome />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
