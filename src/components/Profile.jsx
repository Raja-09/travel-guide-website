import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebase.js";
function Profile() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/home">
        <h2>Home</h2>
      </Link>
      <p>
        <img src="" alt="" />
      </p>
    </div>
  );
}

export default Profile;
