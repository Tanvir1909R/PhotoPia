import React from 'react'
import './nav.scss'

const Navbar = () => {
  return (
    <div className='Container'>
        <div className="navWrapper">
            <div className="logo">
                <img src="./img/logo.png" alt="" />
                <h1>PhotoPia</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar