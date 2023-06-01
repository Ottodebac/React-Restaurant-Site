import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide"></div>
      <div className="rightSide">
        <h1> Contact Us </h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="Enter Name" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter Name" type="email" />
          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Enter message" name="message">
            {" "}
          </textarea>
          <button type="submit">Send Message </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
