import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    entered: false
  }

  enterSite = (event) => {
    event.target.className = "button-click"
    let siteEntered = this.state.entered
    setTimeout(() => {
      this.setState({
        entered: !siteEntered
      });
    }, 1500)
  }

  render() {
    return (
      <div className="App">
        {this.state.entered ?
        <FadeIn delay="200">
        <div>
        <header className="App-header">
        </header>
        <Router>
          <React.Fragment>
            <br></br><br></br>
            <Navbar /><br></br><br></br>
            <Route exact path="/" component={Home} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about" component={About}/>
          </React.Fragment>
        </Router>
        </div>
        </FadeIn>
        :
        <Enter enterSite={this.enterSite}/>}
      </div>
    );
  }
}

export default App;
