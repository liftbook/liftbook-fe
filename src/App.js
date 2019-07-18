// import React from 'react';
// import './App.css';
// import { Route } from 'react-router-dom';


import React, { Component } from "react";
import Summary from "./Summary";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Add from "Add";

// material-ui components
// core components
import Button from "components/CustomButtons/Button.jsx";
// import { connect } from "react-redux";
// import { withRouter } from "react-router";
import User from './User'


// import withStyles from "@material-ui/core/styles/withStyles";
// // core components
// import Card from "components/Card/Card.jsx";
// import CardBody from "components/Card/CardBody.jsx";
// import { makeStyles } from "@material-ui/core/styles";
// import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignUp/SignupForm';
import { connect } from "react-redux";
import { withRouter } from "react-router";
import User from "./User";

import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/SignUp/SignupForm";


// @material-ui/core components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
// import Search from "@material-ui/icons/Search";
// import Email from "@material-ui/icons/Email";
// import Face from "@material-ui/icons/Face";
// import Settings from "@material-ui/icons/Settings";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import Explore from "@material-ui/icons/Explore";
// // core components
// import GridContainer from "components/Grid/GridContainer.jsx";
// import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import PrivateRoute from './PrivateRoute'
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import PrivateRoute from "./PrivateRoute";

// import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.jsx";

// import image from "assets/img/bg.jpg";
// import profileImage from "assets/img/faces/avatar.jpg";

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
  render() {
    console.log('something')
  return (
    <div >
       <Header
              brand="Liftbook"
              color="info"
              links={
                <List className={this.state.classes.list + " " + this.state.classes.mlAuto}>
                  <ListItem className={this.state.classes.listItem}>
                    <Button
                      href="#pablo"
                      className={this.state.classes.navLink + " " + this.state.classes.navLinkActive}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem>
                  <ListItem className={this.state.classes.listItem}>
                    <Button
                      className={this.state.classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Link to="/users/">
                      Profile
                      </Link>
                    </Button>
                  </ListItem>
                  <ListItem className={this.state.classes.listItem}>
                    <Button
                      href="#pablo"
                      className={this.state.classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Settings
                    </Button>
                  </ListItem>
                  <Summary />
                </List>
              }//
            />
      <Route exact path="/" component={LoginForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/users/register" component={SignupForm} />
      <Route exact path="/add" component={Add} />

      {/*this route private after login*/}
      <PrivateRoute exact path="/users" component={User} />
      <PrivateRoute exact path="/users/:username" component={User} />
      <PrivateRoute exact path="/Summary" component={Summary}/>

      {/* <PrivateRoute exact path="/users/[username]/logs/[exerciseId]" component={DeleteFriend} /> */}

    </div>
  );
}
    return (
      <div>
        <Header
          brand="Liftbook"
          color="info"
          links={
            <List
              className={
                this.state.classes.list + " " + this.state.classes.mlAuto
              }
            >
              <ListItem className={this.state.classes.listItem}>
                <Button
                  href="#pablo"
                  className={
                    this.state.classes.navLink +
                    " " +
                    this.state.classes.navLinkActive
                  }
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Discover
                </Button>
              </ListItem>
              <ListItem className={this.state.classes.listItem}>
                <Button
                  className={this.state.classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  <Link to="/users">Profile</Link>
                </Button>
              </ListItem>
              <ListItem className={this.state.classes.listItem}>
                <Button
                  href="#pablo"
                  className={this.state.classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Settings
                </Button>
              </ListItem>
            </List>
          } //
        />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/users/register" component={SignupForm} />
        <Route exact path="/add" component={Add} />

        {/*this route private after login*/}
        <Route exact path="/users" component={User} />
        <Route exact path="/users/:username" component={User} />
        <Route exact path="/Summary" component={Summary} />
      </div>
    );
  }
}
