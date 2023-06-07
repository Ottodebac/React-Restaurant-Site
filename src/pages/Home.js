import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-container">
        <div className="text-content">
          <div className="headerContainer">
            <h1>Best Sushi</h1>
            <p>Real Good Sushi</p>
            <Link to="/menu">
              <button>ORDER NOW</button>
            </Link>
          </div>
        </div>
        <div className="image-container"></div>
      </div>

      <div class="headerContainer2">
        <div class="address">
          <h2>Address</h2>
          <hr />
          <p>
            G01&G02 Lalaport Bukit Bintang City Center, No.2 Jalan Hang Tuah,
            55100 Kuala Lumpur, Malaysia
          </p>
        </div>
        <div class="hours">
          <h2>Contact</h2>
          <hr />
          <p>Yumsushi@gmail.com</p>
        </div>
        <div class="hours">
          <h2>Hours</h2>
          <hr />
          <p>Monday to Sunday 10:00AM – 10:00PM</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
