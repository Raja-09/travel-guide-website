import React from "react";
import { useHistory } from "react-router-dom";
import "./styles/Footer.css";

function Footer() {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
      />
      <link rel="stylesheet" href="assets/css/style.css" />
      <div className="footer-basic ">
        <footer>
          <div className="social">
            <a href="#">
              <i className="icon ion-social-instagram" />
            </a>
            <a href="#">
              <i className="icon ion-social-github" />
            </a>
            <a href="#">
              <i className="icon ion-social-twitter" />
            </a>
            <a href="#">
              <i className="icon ion-social-facebook" />
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <span style={{ cursor: "pointer" }} onClick={goHome}>
                <a href="#">Home</a>
              </span>
            </li>
            <li className="list-inline-item">
              <a href="#">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p className="copyright">Travellopedia © 2022</p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
