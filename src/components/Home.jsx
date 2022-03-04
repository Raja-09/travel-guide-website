import React from "react";
import { auth } from "../firebase.js";
import "firebase/compat/auth";
import "firebase/compat/firestore";


function Home() {
  const signOut = () => {
      if(window.confirm("Are you sure you want to sign out?")){
          auth.signOut();
      }
  };
  return (
    <div>
      This is the home ppage
      <button onClick={signOut}>Log out</button>{" "}
    </div>
  );
}

export default Home;
