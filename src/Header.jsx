import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Zoo app</h1>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/animals" className="nav-link">
              Animals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/birds" className="nav-link">
              Birds
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
