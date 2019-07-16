// import React from 'react';
// import './App.css';
// import { Route } from 'react-router-dom';


import React, { Component } from "react";
import Summary from "./Summary";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Add from "Add";

// material-ui components
// core components
import Button from "components/CustomButtons/Button.jsx";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignUp/SignupForm';

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "assets/jss/material-kit-pro-react.jsx";

const style = {
  cardTitle,
  cardLink,
  cardSubtitle
};

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: props
    };
  }

  componentDidMount() {}

  render() {
    console.log("something");
    return (
      <div className="App">
        <Link to="/Summary">LINK</Link>
        <Route exact path="/Summary" component={Summary} />
        <Route exact path="/add" component={Add} />
        <Route exact path='/' render={props => <LoginForm {...props} />} />
      <Route path='/users/register' render={props => <SignupForm {...props} />} />
      </div>
    );
  }
}