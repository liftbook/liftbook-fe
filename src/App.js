import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import Add from "Add";
import PersistentDrawerLeft from "./SideMenu";
import User from "./User";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/SignUp/SignupForm";
import PrivateRoute from "./PrivateRoute";
import Exercises from "./Exercises.js";

// import {
//   cardTitle,
//   cardLink,
//   cardSubtitle
// } from "assets/jss/material-kit-pro-react.jsx";

// const style = {
//   cardTitle,
//   cardLink,
//   cardSubtitle
// };

// const style = {
//   cardTitle,
//   cardLink,
//   cardSubtitle
// };

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: props
    };
  }

  render() {
    console.log("something");
    return (
      <div className="app">
        <PersistentDrawerLeft />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/users/register" component={SignupForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/add" component={Add} />

        {/*this route private after login*/}
        <PrivateRoute exact path="/users" component={User} />
        <PrivateRoute exact path="/users/:username" component={User} />
        <PrivateRoute
          exact
          path="/users/:username/exercises"
          component={Exercises}
        />

        {/* <PrivateRoute exact path="/users/[username]/logs/[exerciseId]" component={DeleteFriend} /> */}
      </div>
    );
  }
}
