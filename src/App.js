import React, { Component } from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import { Redirect } from 'react-router'
import FadeIn from 'react-fade-in';
import Navbar from './components/Navbar'
import Home from './containers/Home'
import Resume from './containers/Resume'
import Projects from './containers/Projects'
import About from './containers/About'
import Enter from './components/Enter'

import './App.css';

class App extends Component {

  state={
    entered: false,
    clicked: false
  }

  enterSite = (event) => {
    event.target.className = "button-click"
    let siteEntered = this.state.entered
    this.setState({
      entered: true
    })
    localStorage.setItem('entered', 1)
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
    localStorage.clear()
    this.setState({
      entered: false
    })
    return <Enter />
  }

  // renderAbout = () => {
  //   // this.props.
  //   return <About/>
  // }

  render() {
    return (
      <div>
        {this.state.entered && localStorage.length > 0 ?
        <FadeIn delay="200">
        <div className="App">
          <div>
          <div className="App-header">
          <image className="image" src="./stars_wallpaper_by_silent_broken_wish.jpg"/>
          </div>
          <Router>
            <React.Fragment>
              <br></br><br></br>
              <Navbar /><br></br><br></br>
              <Route exact path="/" render={this.leaveSite}/>
              <Route exact path="/resume" component={Resume} />
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/about" component={About}/>
            </React.Fragment>
          </Router>
          </div>
          </div>
          </FadeIn>
        : <div>
            <Enter handleClick={this.handleClick} enterSite={this.enterSite}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
