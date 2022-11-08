import React, { useContext, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../contexts/UserContext";
import "./nav.scss";

const Navbar = () => {
  const { user, LogOut } = useContext(authContext);
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

  const handleLogOut = ()=>{
    LogOut()
  }

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
            {
              user?.email &&
              <>
                <NavLink to='/my-review'>My Review</NavLink>
                <NavLink to='/add-service'>Add Service</NavLink>
                <p className="m-0" role='button' onClick={handleLogOut}>LogOut</p>
              </>
              
            }
          </nav>
          <div className="profile">
            {user?.email ? (
              <>
                <div className="profileImg">
                  <img src={user.photoURL} alt="img" />
                </div>
                  <p>{user.displayName}</p>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
