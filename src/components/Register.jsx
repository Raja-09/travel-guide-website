import React, { useState } from "react";
import "./styles/Register.css";
import { Button, Input } from "@mui/material";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AlertDialog from "./mui/AlertDialog";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [user] = useAuthState(auth);
  const history = useHistory();
  const signOut = () => {
    auth.signOut().then((auth) => {
      history.push("/register");
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        history.push("/home");
        //refresh page
        window.location.reload();
        return result.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => alert(error.message));
  };
  if (!user)
    return (
      <div>
        Register your account here by entering your details.
        <div className="reg-inputs">
          <label htmlFor="">Name</label>
          <Input
            type="text"
            value={name}
            autoComplete="new-password"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="">Email</label>
          <Input
            type="email"
            value={email}
            autoComplete="new-password"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <Input
            type="password"
            autoComplete="new-password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="">Confirm Password</label>
          <Input
            type="password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirm(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        <Button onClick={handleSubmit}>Click here</Button>
      </div>
    );
  else
    return (
      <div>
        <AlertDialog
          text={
            <>
              Logged in as {user.displayName}
              <br /> Are you Sure you want to log out and add an account`
            </>
          }
          confirmText="Logout and add Account"
          heading="Confirm Logout"
          main={() => {
            signOut();
          }}
          exit={"Go back"}
          quit={() => {
            history.push("/home");
          }}
        />
      </div>
    );
}

export default Register;
