import { React, useState } from "react";
import "./styles/Welcome.css";
import "firebase/compat/auth";
import "./styles/Home.css";
import "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import { auth, db } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import video1 from "../videos/vid-1.mp4";
import video2 from "../videos/vid-2.mp4";
import video3 from "../videos/vid-3.mp4";
import video4 from "../videos/vid-4.mp4";
import video5 from "../videos/vid-5.mp4";
import { Alert, Button, TextField } from "@mui/material";

function Welcome() {
  const vidArr = [video1, video2, video3, video4, video5];
  const [video, setVideo] = useState(vidArr[0]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("");
  const [user] = useAuthState(auth);
  const handleVideoChange = () => {
    //change to next video
    let index = vidArr.indexOf(video);
    if (index === vidArr.length - 1) {
      setVideo(vidArr[0]);
    }
    setVideo(vidArr[index + 1]);
  };

  const changeAlert = () => {
    setStatus("Query Submitted");
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    let id = "";
    if (user) {
      id = user.uid;
    }

    //if none of them are null
    if (fname !== "" && email !== "" && query !== "") {
      await db.collection("queries").add({
        fname,
        lname,
        email,
        query,
        mobile,
        user: id,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setFname("");
      setLname("");
      setEmail("");
      setQuery("");
      setMobile("");
      changeAlert();
    }
  }

  return (
    <div className="welcome">
      <section className="home">
        <div className="content">
          <h3>adventure is worthwhile</h3>
          <p>Discover new places, travel the World</p>
          <a className="btn btn-warning btn-lg">Learn More</a>
        </div>

        <video
          className="homeVideo"
          autoPlay
          src={video}
          loop
          type="video/mp4"
          muted
          onClick={handleVideoChange}
        />
      </section>
      <div className="contact" id="contact">
        <h3>Contact Us</h3>
        <div className="textFields">
          <div className="names">
            <span className="fname">
              <TextField
                value={fname}
                sx={{ width: "100%" }}
                label="First Name"
                onChange={(e) => setFname(e.target.value)}
                color="primary"
                required
              />
            </span>
            <span className="lname">
              <TextField
                value={lname}
                sx={{ width: "100%" }}
                onChange={(e) => setLname(e.target.value)}
                label="Last Name"
                color="primary"
              />
            </span>
          </div>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            label="Email"
            required
            color="primary"
          />
          <TextField
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            sx={{ marginBottom: "20px" }}
            label="Mobile"
            color="primary"
          />
          <TextField
            sx={{ marginTop: "20px", marginBottom: "20px" }}
            value={query}
            required
            label="Your Query Here"
            onChange={(e) => setQuery(e.target.value)}
            color="primary"
            multiline
            rows={5}
          />
        </div>
        <Button
          sx={{ marginLeft: "850px", marginTop: "20px" }}
          variant="outlined"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {status ? (
          <Alert
            severity="success"
            onClose={() => {
              setStatus("");
            }}
          >
            Query Submitted Successfully
          </Alert>
        ) : null}
      </div>
      
    </div>
  );
}

export default Welcome;
