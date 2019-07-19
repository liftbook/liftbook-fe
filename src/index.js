import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import reducer from "./reducer";

import { BrowserRouter as Router } from "react-router-dom";

import "assets/scss/material-kit-pro-react.scss?v=1.7.0";

// import { createBrowserHistory } from "history";

// var hist = createBrowserHistory();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <div>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </div>,
  document.getElementById("root")
);
