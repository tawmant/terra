import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorBoundry from './components/error-boundry';


document.body.style.backgroundColor = "#E5E5E5";


ReactDOM.render(
  <ErrorBoundry>
    <Router>
      <App />
    </Router>
  </ErrorBoundry>,
  document.getElementById('root')
);

