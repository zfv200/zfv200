import React from 'react'

class Project extends React.Component{

  state={
    toggled: false
  }

  handleClick = () => {
    let currentToggle = this.state.toggled
    this.setState({
      toggled: !currentToggle
    })
  }

  render(){
    return(
      <div>
        <h1 onClick={this.handleClick}>{this.props.title}</h1>
        <p>{this.props.stack}</p>
        {this.state.toggled ?
        <div>
          <p>{this.props.description}</p>
          <ul>
            <li>{this.props.line1}</li>
            <li>{this.props.line2}</li>
            <li>{this.props.line3}</li>
          </ul>
        </div>
        : null}
      </div>
    )
  }
}

export default Project
