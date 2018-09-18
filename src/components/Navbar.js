import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='button-container'>
      <NavLink to="/about">
        <button className='circle-button'><p className="button-text">About</p></button>
      </NavLink>
      <NavLink to="/projects">
        <button className='circle-button'><p className="button-text">Projects</p></button>
      </NavLink>
      <NavLink to="/resume">
        <button className='circle-button'><p className="button-text">Resume</p></button>
      </NavLink>
    </div>
  )
}

export default Navbar
