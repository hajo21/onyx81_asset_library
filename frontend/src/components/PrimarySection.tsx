import React from "react";
import "./PrimarySection.css";

function PrimarySection() {
  return (
    <section className="primary-section">
      {/* Left text summary */}
      <div className="site-summary">
        <h3>Explore the Asset Library</h3>
        <p>
          We created this Asset Library as our way of giving teaching, assemblage, 
          insights, and knowledge from current and former Management Academy cohorts 
          into one collaborative space.
        </p>
      </div>

      {/* Middle: 4 main “Discover More” buttons */}
      <div className="discover-more">
        <h4>Discover more about the Asset Library</h4>
        <div className="button-row">
          <button className="link-box">Our Challenge</button>
          <button className="link-box">Our Solutions</button>
          <button className="link-box">Our Framework</button>
          <button className="link-box">Our Vision</button>
        </div>
      </div>

      {/* Right: 4 additional links/buttons */}
      <div className="key-areas">
        <h4>What You Can Do Here</h4>
        <div className="button-row">
          <button className="link-box">Reference Past Project Documents</button>
          <button className="link-box">Stream Archived Recordings</button>
          <button className="link-box">View Lists of Past Books</button>
          <button className="link-box">Access Past Academy Galleries</button>
        </div>
      </div>

    </section>
  );
}

export default PrimarySection;
