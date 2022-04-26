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
import contact from "../videos/book-img.svg";
import { Alert, Button, TextField, Divider } from "@mui/material";
import { useHistory } from "react-router-dom";

function Welcome() {
  const vidArr = [video2, video1, video3, video4, video5];
  const [video, setVideo] = useState(vidArr[0]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("");
  const [user] = useAuthState(auth);
  const history = useHistory();
  const handleVideoChange = () => {
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
  const handleAuthentication = () => {
    if (!user) {
      history.push("/login");
    } else {
      history.push("/home");
    }
  };

  return (
    <div className="welcome" id="welcome">
      <section className="home">
        <div className="content">
          <h3>adventure is worthwhile</h3>
          <p>Discover new places, travel the World</p>
          <a className="btn btn-warning btn-lg" href="#learn">
            Learn More
          </a>
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
      <a href="#contact" id="conBtn"></a>
      <a href="#about" id="aboutBtn"></a>

      <div id="about">
        <h3 style={{ visibility: "hidden" }}>uysdaisdg</h3>
      </div>
      <section className="about">
        <div className="content">
          <h1 style={{ padding: 20 }}>
            <i>
              <u>
                <b>About Travellopedia</b>
              </u>
            </i>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Divider />
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit unde
            cumque molestias quam nostrum minima libero voluptatibus adipisci
            perferendis recusandae dolor commodi maiores, asperiores ad
            molestiae at pariatur sed?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quas laborum ipsam officiis. Repudiandae cupiditate
            velit, incidunt omnis obcaecati error nam aliquam tempore in rem
            fugiat? Voluptate doloribus fugiat repellat.
          </p>

          <p>
            Contact:{" "}
            <a href="mailto:aravindha92@gmail.com" target="_blank">
              Email
            </a>
          </p>
        </div>
      </section>
      <div className="project">
        <p>
          <h2 className="mainHeadings">&nbsp;&nbsp;About our Project</h2>
        </p>
        <div className="project_desc" id="learn">
          Going out for tours and vacations is a much-needed escape from our
          daily routine as it helps us rejuvenate ourselves and gives us the
          dose of joy and entertainment that we usually miss out due to our busy
          work schedule. ​ Once deciding to go out on a trip planning one can be
          quite tricky and overwhelming in some cases, especially for people
          with no prior knowledge or experience travelling and going out on
          trips.​ ​ Our Project aims at solving this problem, by creating a ​
          website that gives a detailed overview regarding all the​ famous and
          well-known tourist locations in India. Any ​ person shall be able to
          open the site and simply choose a ​ state or city they would like to
          visit and our website shall ​ provide them with details of the famous
          locations and ​ sites that are worth visiting in that place. ​
        </div>
      </div>
      <div className="project">
        <h2 className="mainHeadings">&nbsp;&nbsp;A guide to our Guide</h2>
        <div className="project_desc guide_desc">
          Feel Free to explore and look for the places you are most eager to
          visit . You can choose places based on states or the places directly.
          To get started you will have to sign in first, click the button below
          to be redirected to the sign in page, you can also create an account
          if you dont have one already.
          <br />
          <Button
            onClick={() => {
              handleAuthentication();
            }}
            className="my-3"
            sx={{ fontSize: "20px" }}
            variant="contained"
          >
            Sign In
          </Button>
          You will then be redirected to the home page from where you can choose
          our destinations and view wonderful places to visit and travel to. We
          sure do we hope we help you tick off your bucket list of places to
          visit in India.
        </div>
      </div>
      <div id="contact">
        <h3 style={{ visibility: "hidden", height: "10px" }}>uysdaisdg</h3>
      </div>
      <div className="contact">
        <h3>Get in touch with us </h3>
        <span style={{ width: "600px" }}>
          Please post your queries and questions here and we will get back to
          you as soon as possible
        </span>
        <div className="contactWrapper">
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
            <span>
              Reach out to us at :{" "}
              <a href="mailto:travellopedia@gmail.com">
                travellopedia@gmail.com
              </a>
            </span>
          </div>
          <img
            src={contact}
            alt=""
            className="contactImg"
            style={{
              width: "400px",
              height: "500px",
            }}
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
