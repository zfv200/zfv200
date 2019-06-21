import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import { Redirect, withRouter } from 'react-router'
import FadeIn from 'react-fade-in';
import Navbar from './components/Navbar'
import Experience from './containers/Experience'
import Projects from './containers/Projects'
import About from './containers/About'
import Enter from './components/Enter'
import Footer from './components/Footer'
import Learning from './containers/Learning'

import './App.css';

class App extends Component {

  state={
    entered: false,
    clicked: false,
  }

  enterSite = (event) => {
    event.target.className = "button-click"
    let siteEntered = this.state.entered
    localStorage.setItem('entered', 1)
    this.setState({
      entered: true
    })
  }

  componentDidMount(){
    if (window.location.href.slice(-1)==="/"){
      localStorage.clear()
      this.setState({
        entered: false
      })
    } else {
      this.setState({
        entered: true
      })
    }
  }

  handleClick = () =>{
    setTimeout(() => {
      this.setState({
        entered: true
      });
    }, 1500)
  }

  leaveSite = () => {
    if(window.location.href.slice(-1)==="/"){
      localStorage.clear()
      this.setState({
        entered: false
      })
      return <Enter />
    } else {
      return <About />
    }
  }

  render() {
    return (
      <div className="full-background">
        {this.state.entered && localStorage.length > 0 ?
        <FadeIn delay="200">
          <div className="App">
            <div>
              <div className="App-header">
              <NavLink to="/about" style={{textDecoration: 'none'}}>
                <h1 className="App-title">Zach Vary</h1>
              </NavLink>
              </div>
              <h3 className="banner">Full Stack Web Developer</h3>
                <React.Fragment>
                  <br></br><br></br>
                  <Navbar /><br></br><br></br>
                  <Route exact path="/" render={this.leaveSite}/>
                  <Route exact path="/experience" component={Experience} />
                  <Route exact path="/projects" component={Projects}/>
                  <Route exact path="/about" component={About}/>
                  <Route exact path="/learning" component={Learning}/>
                </React.Fragment>
              </div>
            </div>
          </FadeIn>
        : <div>
            <Enter handleClick={this.handleClick} enterSite={this.enterSite}/>
          </div>
        }
        {this.props.location.pathname !== "/about" ? <Footer /> : null}
      </div>
    );
  }
}

export default withRouter(App);
