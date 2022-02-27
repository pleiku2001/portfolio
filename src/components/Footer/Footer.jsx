import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <h3>Create by NTK - 2022 😘 </h3>
      <div className="icon_footer">
        <a href="https://github.com/pleiku2001">
          <img
            src="https://img.icons8.com/color/48/000000/github--v3.png"
            alt=""
          />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100012661327765">
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt=""
          />
        </a>
        <a href="/">
          <img
            src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
