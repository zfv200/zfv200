import React from 'react'
import ReactDOM from 'react-dom'
import FadeIn from 'react-fade-in';

import mobileProps from '../mobileHOCs/mobileProps'


class Project extends React.Component{

  constructor(props){
    super(props)
    this.state={
      toggled: this.props.toggled,
      collapsed: this.props.collapsed
    }
    this.ref = React.createRef()
  }

  componentDidMount(){
    this.node = ReactDOM.findDOMNode(this)
  }

  scrollToTitle = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 450 + this.props.offset) {
      window.requestAnimationFrame(this.scrollToTitle);
      window.scrollTo(0, c - c / 20);
    }
  };

  handleClick = () => {
    this.scrollToTitle()
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
      return <text className="footer-text"> <a target="_blank" href={this.props.ghlB}>Github API</a></text>
    }
  }

  demo = () => {
    if (this.props.demo){
      return <text className="footer-text"> <a target="_blank" href={this.props.demo}>Demo</a></text>
    }
  }


  render(){
    if(this.props.isMobile){
      return (
        <div>
          <h1 className="projectTitle">{this.props.title}</h1>
            <FadeIn>
            <p className="stack">{this.props.stack}</p>
            <p className="centered stack">{this.props.description}</p>
            <a href={this.props.bhlF} target="_blank">Github</a> <text className="footer-text"> </text> {this.githubBackEnd()} {this.demo()}
            <br></br>
            <div>
              <div className="list">
                <ul className="left">
                <li>{this.props.line1}</li>
                <li>{this.props.line2}</li>
                <li>{this.props.line3}</li>
                </ul>
              </div>
              <br></br>
              <img src={this.props.screenshot} style={this.props.style}/><br></br>
            </div>
            </FadeIn>
        </div>
      )
    } else {
      return(
        <div>
        <h1 className="projectTitle" ref={this.ref} onClick={this.handleClick}>{this.props.title}</h1>
        {this.state.toggled ?
          <FadeIn>
          <p className="stack">{this.props.stack}</p>
          <p className="centered stack">{this.props.description}</p>
          <a href={this.props.bhlF} target="_blank">Github</a> <text className="footer-text"> </text> {this.githubBackEnd()} {this.demo()}
          <br></br>
          <div>
          <div className="list">
          <ul className="left">
          <li>{this.props.line1}</li>
          <li>{this.props.line2}</li>
          <li>{this.props.line3}</li>
          </ul>
          </div>
          <br></br>
          <img src={this.props.screenshot} style={this.props.style}/><br></br>
          </div>
          </FadeIn>
          : null}
          </div>
        )
    }
  }
}

export default mobileProps(Project, 'project')
