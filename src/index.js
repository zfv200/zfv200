import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Home from './containers/Home'
// import Resume from './containers/Resume'
// import Projects from './containers/Projects'
// import About from './containers/About'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <div>
  <App/>
  </div>),
  document.getElementById('root')
);

registerServiceWorker();
