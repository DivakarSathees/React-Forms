import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
          <ul className='ul'>
            <li className='li'>
              <NavLink  exact="true" to="/" >Home</NavLink>
            </li>
            <li className='li'>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li className='li'>
              <NavLink to="/destination">Destination</NavLink>
            </li>
            <li className='li'>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
            <li className='li'>
              <NavLink to="/registration">Registration Form</NavLink>
            </li>
          </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
