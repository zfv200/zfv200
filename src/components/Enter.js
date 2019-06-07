import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

const Enter = (props) => {

  return (
    <div onClick={props.enterSite}>
      <Router>
        <Link to="/about">
          <button onClick={props.handleClick} className='alt-button' ><p className="button-text">Enter</p></button>
        </Link>
      </Router>
    </div>
  )
}

export default Enter
