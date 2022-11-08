import React from "react";
import { Link } from "react-router-dom";
import './footer.scss'

const Footer = () => {
  return (
    <div className="Container">
      <div className="footerWrapper">
        <div className="footerLogo">
          <div className="logo">
            <div className="logoImg">
              <img src="./img/logo.png" alt="" />
            </div>
            <h1>PhotoPia</h1>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda excepturi praesentium animi </p>
        </div>
        <div>
          <h3>| Quick Menu</h3>
          <p><Link to='/'>Home</Link></p>
          <p><Link to='/services'>Services</Link></p>
          <p><Link to='/blog'>Blog</Link></p>
        </div>
        <div>
          <h3>| Services</h3>
          <p>Arial Photography</p>
          <p>Timelapse</p>
          <p>Wildlife</p>
        </div>
        <div>
          <h3>| Links</h3>
          <p>Arial Photography</p>
          <p>Timelapse</p>
          <p>Wildlife</p>
        </div>
      </div>
      <div className="copyRight">
      Copyright© 2022 FlyWing - All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
