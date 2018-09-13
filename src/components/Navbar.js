import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='button-container'>
      <NavLink to="/about">
        <button className='circle-button'>About</button>
      </NavLink>
      <NavLink to="/projects">
        <button className='circle-button'>Projects</button>
      </NavLink>
      <NavLink to="/resume">
        <button className='circle-button'>Resume</button>
      </NavLink>
    </div>
  )
}

export default Navbar
