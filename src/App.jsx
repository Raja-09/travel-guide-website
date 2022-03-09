import "./App.css";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "./components/Login.jsx";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {/* <Login /> */}
      {user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
