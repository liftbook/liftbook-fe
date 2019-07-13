import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

import { BrowserRouter as Router } from "react-router-dom";


// import "assets/scss/material-kit-pro-react.scss?v=1.7.0";

import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

const store = createStore(
  reducer, 
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
