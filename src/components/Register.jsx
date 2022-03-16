import React, { useState } from "react";
import "./styles/Register.css";
import { Button, Input } from "@mui/material";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [open, setOpen] = React.useState(true);
  const [user] = useAuthState(auth);
  const history = useHistory();
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
        return result.user.updateProfile({
          displayName: name,
        });
      })
      .catch((error) => alert(error.message));
  };
  if (!user)
    return (
      <div>
        <div className="reg-inputs">
          <Input
            type="text"
            value={name}
            autoComplete="new-password"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            value={email}
            autoComplete="new-password"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            autoComplete="new-password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
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
        <h5>Logged in as {user?.displayName}</h5>
        <Link to="/home">
          <h2>Home</h2>
        </Link>
        <p>
          <img src="" alt="" />
        </p>
      </div>
    );
}

export default Register;
