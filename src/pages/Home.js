import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Banner from "../Content/banner.jpg";

function Home() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Sample Text</h1>
        <p>lorem ipsum subheader</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
