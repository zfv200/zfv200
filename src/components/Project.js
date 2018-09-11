import React from 'react'
import FadeIn from 'react-fade-in';

class Project extends React.Component{

  state={
    toggled: this.props.toggled,
    collapsed: this.props.collapsed
  }

  handleClick = () => {
    let currentToggle = this.state.toggled
    this.setState({
      toggled: !currentToggle
    })
  }

  render(){
    console.log("toggled", this.state.toggled, "collapsed", this.state.collapsed);
    return(
      <div>
        <h1 className="projectTitle" onClick={this.handleClick}>{this.props.title}</h1>
        <p className="stack">{this.props.stack}</p>
        {!this.state.collapsed && this.state.toggled ?
          <FadeIn>
          <div>
          <p className="centered">{this.props.description}</p>
            <div className="list">
              <ul>
              <li>{this.props.line1}</li>
              <li>{this.props.line2}</li>
              <li>{this.props.line3}</li>
              </ul>
            </div>
          </div>
          </FadeIn>
        : null}
      </div>
    )
  }
}

export default Project
