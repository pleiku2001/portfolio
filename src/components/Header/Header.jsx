import React from "react";
import "./header.css";
function Header() {
  return (
    //   <img src="https://img.icons8.com/plasticine/100/000000/k.png"/>
    <div className="header">
      <a href="/" className="left" >
        <img
          src="https://img.icons8.com/plasticine/100/000000/k.png"
          alt="icon"
          className="icon"
        />
      </a>
      <div className="right">
        <ul className="ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Introduce</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
