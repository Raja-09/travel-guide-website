import { React, useState } from "react";
import "./styles/Welcome.css";
import video1 from "../videos/vid-1.mp4";
import video2 from "../videos/vid-2.mp4";
import video3 from "../videos/vid-3.mp4";
import video4 from "../videos/vid-4.mp4";
import video5 from "../videos/vid-5.mp4";
function Welcome() {
  const [video, setVideo] = useState(video1);
  const vidArr = [video1, video2, video3, video4, video5];
  const handleVideoChange = () => {
    const random = Math.floor(Math.random() * vidArr.length);
    setVideo(vidArr[random]);
  };
  return (
    <div className="welcome">
      <section className="home">
        <div className="content">
          <h3>adventure is worthwhile</h3>
          <p>Discover new places, travel the World</p>
          <a href="#" className="btn btn-warning btn-lg">
            Learn More
          </a>
        </div>
        <span onClick={handleVideoChange}>
          <video
            className="homeVideo"
            autoPlay
            src={video}
            loop
            type="video/mp4"
            muted
          />
        </span>
      </section>
    </div>
  );
}

export default Welcome;
