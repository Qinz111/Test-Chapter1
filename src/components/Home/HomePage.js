import React from "react";
import VideoHomePage from "../assets/tieuchanh.mp4";
const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <video autoPlay loop muted>
        <source src={VideoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="title-1">MIEU TIEU CHANH</div>
        <div className="title-2">You're my cup of tea</div>
        <div className="title-3">
          <button className="btn">Let's go!</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
