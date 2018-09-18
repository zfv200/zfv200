import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'

class Enter extends React.Component {
  // state={
  //   clicked: false
  // }
  //
  // handleClick = () => {
  //   console.log("hi");
  //   this.setState({
  //     clicked: true
  //   })
  // }

  render(){
    return (
      <div onClick={this.props.enterSite}>
        <Router>
          <Link to="/about">
            <button onClick={this.props.handleClick} className='alt-button' ><p className="button-text">Enter</p></button>
          </Link>
        </Router>
      </div>
    )
  }
}

export default Enter
