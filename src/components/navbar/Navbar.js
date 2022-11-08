import React, { useContext, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../contexts/UserContext";
import "./nav.scss";

const Navbar = () => {
  const { user } = useContext(authContext);
  const header = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 1) {
        header.current.classList.add("navActive");
      } else {
        header.current.classList.remove("navActive");
      }
    });
  });
  return (
    <header ref={header}>
      <div className="Container">
        <div className="navWrapper">
          <div className="logo">
            <div className="logoImg">
              <img src="./img/logo.png" alt="" />
            </div>
            <h1>PhotoPia</h1>
          </div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">services</NavLink>
            <NavLink to="/blog">Blog</NavLink>
          </nav>
          <div className="profile">
            {
              user?.email ?
              <>
              <div className="profileImg">
                <img src="" alt="img" />
              </div>
              <p>tanvir</p>
            </>
            :
            <Link to='/login'>Login</Link>
            }
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
