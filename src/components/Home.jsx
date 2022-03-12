import React from "react";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import "./styles/Home.css";
import Navbar from "./Navbar.jsx";
import "firebase/compat/firestore";


function Home() {
  return (
    <div className="Home">
      <Navbar />

    </div>
  );
}

export default Home;
