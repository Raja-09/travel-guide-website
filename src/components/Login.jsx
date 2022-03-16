import React from "react";
import "./styles/Login.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Alert, Button, Collapse, Input, Tooltip } from "@mui/material";
import { useHistory } from "react-router-dom";
import "firebase/compat/firestore";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const history = useHistory();
  const [status, setStatusBase] = useState("");
  const [password, setPassword] = useState("");

  const [user] = useAuthState(auth);
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((auth) => {
        history.push("/home");
      })
      .catch((error) => {
        error.message = error.message.replace("Firebase: ", "");
        setStatusBase({ msg: error.message, key: Math.random() });
      });
  }
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/home");
      })
      .catch((error) => {
        error.message = error.message.replace("Firebase: ", "");
        setStatusBase({ msg: error.message, key: Math.random() });
      });
  };
  if (!user)
    return (
      <div className="login">
        <h3 className="logo">TOURISM</h3>
        <div className="login-container">
          <h1>Sign in</h1>
          <form>
            <div className="inputs">
              <h5 className="ms-1">Email</h5>
              <Input
                type="text"
                value={email}
                id="email"
                className="mb-3 emailInput ms-1"
                onChange={(e) => setEmail(e.target.value)}
              />
              <h5 className="ms-1">Password</h5>
              <Input
                type="password"
                id="password"
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
                Sign in with Google
              </button>
              <Tooltip title="Don't have an account? Register here">
                <button
                  className="btn btn-outline-secondary m-4 "
                  type="button"
                  onClick={() => history.push("/register")}
                >
                  Create New Account
                </button>
              </Tooltip>
            </div>
          </form>
        </div>
        {status ? (
          <Alert
            severity="error"
            onClose={() => {
              setStatusBase("");
            }}
            className="alertBox"
            key={status.key}
          >
            {status.msg}
          </Alert>
        ) : null}
      </div>
    );
  else
    return (
      <div className="">
        youu are already logged in as {user.displayName}
        <p>click here to go to homepage </p>
        <Button onClick={() => history.push("/home")}>Home</Button>
      </div>
    );
}

export default Login;
