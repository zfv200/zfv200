import React from 'react'
import FadeIn from 'react-fade-in';

class Project extends React.Component{

  state={
    toggled: this.props.toggled,
    collapsed: this.props.collapsed
  }

  handleClick = () => {
    this.props.triggerUpdate()
    let currentToggle = this.state.toggled
    this.setState({
      toggled: !currentToggle
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (prevState.toggled===true){
      this.setState({
        toggled: false
      })
    }
  }

  githubBackEnd = () => {
    if (this.props.ghlB){
      return <text className="footer-text">| <a href={this.props.ghlB}>Github API</a></text>
    }
  }

  demo = () => {
    if (this.props.demo){
      return <text className="footer-text">| <a href={this.props.demo}>Demo</a></text>
    }
  }

  render(){
    return(
      <div>
        <h1 className="projectTitle" onClick={this.handleClick}>{this.props.title}</h1>
        <p className="stack">{this.props.stack}</p>
        <p className="centered">{this.props.description}</p>
        <a href={this.props.bhlF}>Github</a> <text className="footer-text"> </text> {this.githubBackEnd()} {this.demo()}
        <br></br>
        {this.state.toggled ?
          <FadeIn>
          <div>
          <img src={this.props.screenshot} className="screenshot"/><br></br>
            <div className="list">
              <ul className="left">
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
