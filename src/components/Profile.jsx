import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.js";
import "./styles/Profile.css";
function Profile() {
  const [user] = useAuthState(auth);
  return (
    <div className="Profile">
      {user.photoURL ? (
        <img
          className="defaultUserIcon"
          src={user.photoURL}
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
        />
      ) : (
        <img
          src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png"
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          className="defaultUserIcon"
        />
      )}
    </div>
  );
}

export default Profile;
