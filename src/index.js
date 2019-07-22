import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunk from "redux-thunk";
import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import { BrowserRouter as Router } from "react-router-dom";

import "assets/scss/material-kit-pro-react.scss?v=1.7.0";

// import { createBrowserHistory } from "history";

// var hist = createBrowserHistory();
const persistConfig = {
  key: "root",
  storage
};

// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// });
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger)
);
let persistor = persistStore(store);

ReactDOM.render(
  <div>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </div>,
  document.getElementById("root")
);
