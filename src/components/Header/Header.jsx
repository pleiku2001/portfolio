import React from "react";
import "./header.css";
import { Link } from "react-scroll";
function Header() {
  return (
    //   <img src="https://img.icons8.com/plasticine/100/000000/k.png"/>
    <div className="header">
      <a href="/" className="left">
        <img
          src="https://img.icons8.com/plasticine/100/000000/k.png"
          alt="icon"
          className="icon"
        />
      </a>
      <div className="right">
        <ul className="ul">
          <li>
            {/* <a href="#home">Home</a> */}
            <Link
              className="link"

              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            {/* <a href="#home">Introduce</a> */}
            <Link
              className="link"

              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Introduce
            </Link>
          </li>
          <li>
            <Link
              className="link"

              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Product
            </Link>
          </li>
          <li>
            {/* <a href="#contact">Contact</a> */}
            <Link
              className="link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
