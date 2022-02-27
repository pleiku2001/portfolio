import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <p>Email: kient2005@gmail.com</p>
      <div className="ct">
        <div className="ip1">
          <input type="text" placeholder="Enter email"/>
        </div>
        <div className="ip2">
          <textarea type="text" placeholder="Enter content"/>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Contact;
