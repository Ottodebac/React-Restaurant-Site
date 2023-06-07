import React, { useState } from "react";
import Logo from "../Content/Together.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }; // halfway finished making ham menu toggle also changed code for button onclick

  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" />
      <div className="leftSide">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <button className="reorder-button" onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
