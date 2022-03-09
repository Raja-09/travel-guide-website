import React from "react";
import "./Login.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Input  } from "@mui/material";
import "firebase/compat/firestore";
import { auth } from "../firebase.js";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message))
      .then(() => {
        if (auth.currentUser) {
          document
            .appendChild
            // <Alert severity="success" color="info">
            //   User created with email: {email}
            // </Alert>
            ();
        }
      });
  };
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <div className="inputs">
            <h5 className="ms-1">Email</h5>
            <Input
              type="text"
              value={email}
              className="mb-3 emailInput ms-1"
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5 className="ms-1">Password</h5>
            <Input
              type="password"
              className="mb-3 passInput ms-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button
              className=" mt-4 btn btn-primary m-2"
              type="submit"
              onClick={signIn}
            >
              Sign In
            </button>
            <button
              className="btn btn-primary m-2"
              onClick={signInWithGoogle}
              type="button"
            >
              Sign in with google
            </button>
            <button
              className="btn btn-outline-secondary m-4 "
              type="button"
              onClick={register}
            >
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
