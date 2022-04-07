import React from "react";
import './styles/Footer.css';

function Footer() {
  return (
    <div>
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Untitled</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"
        />
        <link rel="stylesheet" href="assets/css/style.css" />
        <div className="footer-basic">
          <footer>
            <div className="social">
              <a href="#">
                <i className="icon ion-social-instagram" />
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat" />
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
                <a href="#">Home</a>
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
            <p className="copyright">Company Name © 2018</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
