import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import AlertDialog from "./mui/AlertDialog";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "./styles/Register.css";

function TestRegister() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((auth) => {
        history.push("/home");
      })
      .catch((error) => {
        error.message = error.message.replace("Firebase: ", "");
        // setStatusBase({ msg: error.message, key: Math.random() });
        window.alert(error.message);
      });
  }
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
        <div id="login-box">
          <div className="left">
            <h1>Sign up</h1>
            <input
              className="regInputs"
              type="text"
              placeholder="Username"
              value={name}
              autoComplete="new-password"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="regInputs"
              type="text"
              placeholder="E-mail"
              value={email}
              autoComplete="new-password"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="regInputs"
              type="password"
              autoComplete="new-password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="regInputs"
              autoComplete="new-password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirm(e.target.value)}
              type="password"
              placeholder="Retype password"
            />
            <input
              className="regInputs"
              type="submit"
              name="signup_submit"
              defaultValue="Sign me up"
              onClick={handleSubmit}
            />
          </div>
          <div className="right">
            <span className="loginwith">
              Sign in with
              <br />
              social network
            </span>

            <button
              className="social-signin facebook mt-3"
              onClick={signInWithGoogle}
            >
              Log in with Google
            </button>
          </div>
          <div className="or">OR</div>
        </div>
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

export default TestRegister;
