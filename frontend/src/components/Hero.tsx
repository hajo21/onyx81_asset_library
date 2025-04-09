import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: isVideoPlaying ? "none" : "url('/assets/onxytree.png')", // Remove background image when video is playing
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "400px",
      }}
    >
      {/* Show overlay only when video is not playing */}
      {!isVideoPlaying && (
        <div className="hero-overlay">
          <h2>YEAR OVER YEAR. KNOWLEDGE SHARED. LEGACIES BUILT.</h2>
          <h3>ONYX 81</h3>
          <div className="tagline">STRONGER TOGETHER</div>
          <p>Asset Library Promo Video</p>
          <small>An extension of our community</small>
          <div className="video-length">02:05</div>
          <button className="video-link" onClick={toggleVideo}>
            Watch Video
          </button>
        </div>
      )}

      {/* Show video player once play button is clicked */}
      {isVideoPlaying && (
        <div className="video-container">
          <iframe
            src="https://1drv.ms/v/c/55b3d777fd08d7d0/IQS3Txg1GsYRRowCTUfnjej3AZnw5gTd41mKbKTpQvnlfa8"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      )}
    </section>
  );
}

export default Hero;