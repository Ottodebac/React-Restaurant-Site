import React from "react";
import "../styles/About.css";
import Chef from "../Content/sushichef.jpeg";

function About() {
  return (
    <div className="about">
      <div className="aboutTop"></div>
      <div className="aboutBottom">
        <h1> ABOUT US </h1>
        <p>
          A procession of deftly sliced, shaped, torched and brushed nigiri,
          presented on a gleaming lacquered plate. An exploration of tastes and
          textures; a sensory journey between the oceans of Japan and Australia.
        </p>
      </div>
      <div className="aboutSectionTwo">
        <img src={Chef} alt="Yummy Sushi" />

        <div className="sectionTwoText">
          <h1> WHO WE ARE </h1>
          <p>
            Omakase is a culinary experience led by the chef, the produce and
            the seasons. We offer two dining areas: the counter seating style
            sushi bar for up to two guests; and the dining room for gatherings
            of three and above. In both, we serve an omakase of nigiri and
            Japanese cuisine bound by a common thread — meticulousness,
            precision, technique and exquisite produce.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
