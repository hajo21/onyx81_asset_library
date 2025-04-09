import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu state
  };

  return (
    <header className="site-header">
      <div className="logo-area">
        <Link to="/">
          <img src="/assets/onyx81_logo.png" alt="Site Logo" className="logo" />
          <span className="site-title">Asset Library</span>
        </Link>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Navigation menu */}
      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/documents">Documents</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
