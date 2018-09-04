import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './containers/Home'
import Resume from './containers/Resume'
import Projects from './containers/Projects'
import About from './containers/About'
import Navbar from './components/Navbar'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/projects" component={Projects}/>
      <Route exact path="/about" component={About}/>
      <Navbar />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

registerServiceWorker();
