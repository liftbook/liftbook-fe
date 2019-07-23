import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Add from "Add";
import PersistentDrawerLeft from "./SideMenu";
import User from "./User";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/SignUp/SignupForm";
import PrivateRoute from "./PrivateRoute";

export default class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: props
    };
  }

  render() {
    console.log("something");
    return (
      <div className="App">
        <h1>hi</h1>
        <PersistentDrawerLeft />
      </div>
    );
  }
}
