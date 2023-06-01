import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop"></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
          Welcome to our pizza paradise! At [PizzaSiteName], we are passionate
          about crafting the most delicious and mouthwatering pizzas you'll ever
          taste. With a legacy of pizza-making excellence that spans over
          [number of years] years, we have perfected the art of creating the
          perfect slice of heaven. At the heart of our success lies our
          commitment to using only the finest, freshest ingredients in every
          pizza we make. From hand-picked tomatoes bursting with flavor to
          locally sourced vegetables and premium meats, we ensure that every
          bite delivers an explosion of taste and quality. Our skilled and
          dedicated chefs work tirelessly to create unique flavor combinations
          that will leave you craving more.
        </p>
      </div>
    </div>
  );
}

export default About;
