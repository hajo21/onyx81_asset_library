import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PrimarySection from "../components/PrimarySection";
import Milestones from "../components/Milestones";
import DocumentsSection from "../components/DocumentsSection";
import NewsSection from "../components/NewsSection";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <Hero />

      <div className="content-row">
        <PrimarySection />
      </div>

      <div className="content-row below-primary">
        <div className="left-column">
          <Milestones />
        </div>
        <div className="right-column">
          <DocumentsSection />
        </div>
      </div>

      <NewsSection />
    </div>
  );
}

export default Home;