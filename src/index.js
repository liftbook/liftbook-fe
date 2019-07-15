
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";


import "assets/scss/material-kit-pro-react.scss?v=1.7.0";

import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
import PricingPage from "views/PricingPage/PricingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";
import ErrorPage from "views/ErrorPage/ErrorPage.jsx";

import { createBrowserHistory } from "history";

var hist = createBrowserHistory();

const store = createStore(
  reducer, 
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <div>
  <Router >

    <Provider store={store}>

      <App />

    </Provider>
  </Router>
  </div>
,
  document.getElementById("root")
);



<<<<<<< HEAD

// <Route path="/blog-post" component={BlogPostPage} />
// <Route path="/blog-posts" component={BlogPostsPage} />
// <Route path="/components" component={ComponentsPage} />
// <Route path="/contact-us" component={ContactUsPage} />
// <Route path="/ecommerce-page" component={EcommercePage} />
// <Route path="/landing-page" component={LandingPage} />
// <Route path="/login-page" component={LoginPage} />
// <Route path="/pricing" component={PricingPage} />
// <Route path="/profile-page" component={ProfilePage} />
// <Route path="/product-page" component={ProductPage} />
// <Route path="/sections" component={SectionsPage} />
// <Route path="/shopping-cart-page" component={ShoppingCartPage} />
// <Route path="/signup-page" component={SignupPage} />
// <Route path="/error-page" component={ErrorPage} />
// <Route path="/" component={PresentationPage} />
||||||| merged common ancestors
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> develop
