import React from "react";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import "./Home.css";
import Navbar from "./Navbar.jsx";
import "firebase/compat/firestore";

function Home() {
  const [user] = useAuthState(auth);
  const signOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      auth.signOut();
    }
  };
  return (
    <div className="Home">
      <Navbar />
      <div className="home-container">
        <button onClick={signOut}></button>
      </div>
    </div>
  );
}

export default Home;
