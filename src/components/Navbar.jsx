import React from 'react'
import '../styles/Navbar.css';
import logo from '../assets/shared/logo.svg';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="navbar__logo"><img src={logo} alt="logo" /></li>
        <li className="navbar__items">
          <ul className="navbar__items--right">
            <li><Link to='/'><span>00 </span>Home</Link></li>
            <li><Link to='/destination'><span>01 </span>Destination</Link></li>
            <li><Link to='/crew'><span>02 </span>Crew</Link></li>
            <li><Link to='/technology'><span>03 </span>Technology</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar