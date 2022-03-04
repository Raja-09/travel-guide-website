import React from "react";
import "./login.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
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
      .catch((error) => alert(error.message));
    window.alert("Successfully created new account with email: " + email);
  };
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            className="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="singInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
          <button onClick={signInWithGoogle}>Sign in with google</button>
          <button className="registerButton" onClick={register}>
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
