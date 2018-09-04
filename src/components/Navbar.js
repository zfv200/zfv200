import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
    <div>
      <NavLink
        to="/"
        exact
        // style={}
        activeStyle={{

        }}
      >Home</NavLink>
      <NavLink
        to="/about"
        exact
        // style={}
        activeStyle={{

        }}
      >About</NavLink>
      <NavLink
        to="/projects"
        exact
        // style={}
        activeStyle={{

        }}
      >Projects</NavLink>
    <NavLink
      to="/Resume"
      exact
      // style={}
      activeStyle={{

      }}
    >Resume</NavLink>
    </div>
  )
}

export default Navbar
