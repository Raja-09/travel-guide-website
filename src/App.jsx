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
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <ResponsiveAppBar />
            <Register />
          </Route>
          <Route path="/home">
            <ResponsiveAppBar />
            <Route exact path={"/home"}>
              <Home />
            </Route>
            <Route exact path={"/home/rajasthan"}>
              <Rajasthan />
            </Route>
            <Route exact path={"/home/kerala"}>
              <Kerala />
            </Route>
            <Route exact path={"/home/karnataka"}>
              <Karnataka />
            </Route>
            <Route exact path={"/home/uttar pradesh"}>
              <UttarPradesh />
            </Route>
            <Route exact path={"/home/goa"}>
              <Goa />
            </Route>
            <Route exact path={"/home/maharashtra"}>
              <Maharashtra />
            </Route>
          </Route>
          <Route exact path="/places">
            <ResponsiveAppBar />
            <Places />
          </Route>
          <Route path="/places/*">
            <ResponsiveAppBar />
            <PlaceRoutes />
          </Route>
          <Route path="/myplaces">
            <ResponsiveAppBar />
            <SavedPlaces />
          </Route>
          <Route path="/profile">
            <ResponsiveAppBar />
            <Profile />
          </Route>
          <Route path="/">
            <ResponsiveAppBar />
            <Welcome />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
