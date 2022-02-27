import React from "react";


import "./main.css";
function Main() {
  return (
    <div className="home">
      <div className="main_l">
        <span>
            <p>Hello, 👋 </p>
          <p className="second">
            <span>My name is </span> <span>Nguyễn Trung Kiên</span>
          </p>
          <p className="third">
            I studying at University of Information Technology in Ho Chi Minh
            city
          </p>
          <div className="btn">
            <a href="/">Contact</a>
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
