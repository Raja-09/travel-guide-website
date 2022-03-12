import React from "react";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import "firebase/compat/auth";
import "./styles/Home.css";
import Navbar from "./Navbar.jsx";
import "firebase/compat/firestore";

function Home() {
  const [user] = useAuthState(auth);
  if (user) return <div className="Home">This is home page</div>;
  else
  return (
    <div className="pls-login">
      Pls login to continue
    </div>
  )
}

export default Home;
