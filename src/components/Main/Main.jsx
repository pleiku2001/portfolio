import React from "react";
import { Link } from "react-scroll";

import "./main.css";
function Main() {
  return (
    <div className="home" id="home">
      <div className="main_l">
        <span>
          <p>Hello, 👋 </p>
          <p className="second">
            <span>My name is </span> <span>Nguyễn Trung Kiên</span>
          </p>
          <p className="third">
            I am studying at University of Information Technology in Ho Chi Minh
            city
          </p>
          <div className="logo">
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
            <img src="https://img.icons8.com/color/48/000000/mongodb.png" />
            <img src="https://img.icons8.com/office/48/000000/react.png" />
            <img src="https://img.icons8.com/ios/50/000000/sass.png" />
            <img src="https://img.icons8.com/color/48/000000/firebase.png" />
            <img src="https://img.icons8.com/color/48/000000/nodejs.png" />
            <img src="https://img.icons8.com/color/48/000000/redux.png" />
          </div>
          <div className="btn">
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
          </div>
        </span>
      </div>
      <div className="main_r">
        <img
          src="https://cdn.pixabay.com/photo/2021/02/11/11/21/meeting-6004997_960_720.png"
          alt=""
          className="img_icon"
        />
      </div>
    </div>
  );
}

export default Main;
