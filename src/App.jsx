import "./App.css";
import Login from "./components/Login.jsx";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Test from "./components/Test";
import Profile from "./components/Profile";
import ResponsiveAppBar from "./components/Navbar";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <ResponsiveAppBar />
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <ResponsiveAppBar />
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
