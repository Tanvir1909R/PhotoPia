import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Navbar = () => {
  return (
    <div className='Container'>
        <div className="navWrapper">
            <div className="logo">
                <div className="logoImg">
                <img src="./img/logo.png" alt="" />
                </div>
                <h1>PhotoPia</h1>
            </div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/services'>services</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </nav>
            <div className="profile">
                <div className="profileImg">
                    <img src='' alt='img' />
                </div>
                <p>tanvir</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar