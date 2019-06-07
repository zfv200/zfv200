import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  const buttons = [
    {
      route: '/about',
      text: "About"
    },
    {
      route: '/projects',
      text: "Projects"
    },
    {
      route: '/experience',
      text: "Experience"
    },
    {
      route: '/learning',
      text: "Learning"
    },
  ]

  const renderButtons = () => {
    return buttons.map((button)=>{
      return (
        <React.Fragment>
          <NavLink to={button.route}>
            <button className='circle-button'><p className="button-text">{button.text}</p></button>
          </NavLink>
        </React.Fragment>
      )
    })
  }

  return (
    <div className='button-container'>
      {renderButtons()}
    </div>
  )
}

export default Navbar
