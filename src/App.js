import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Add from "Add";
import PersistentDrawerLeft from "./SideMenu";
import User from "./User";
import LoginForm from "./components/Login/LoginForm";
import SignupForm from "./components/SignUp/SignupForm";
import Home from "./Home";
import Edit from "./Edit";
import PrivateRoute from "./PrivateRoute";
import ExerciseTable from "./ExerciseTable";

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
      <div className="App">
        <h1>hi</h1>
        <PersistentDrawerLeft />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/users/register" component={SignupForm} />
        <PrivateRoute exact path="/add" component={Add} />
        <PrivateRoute exact path="/edit" component={Edit} />
        <PrivateRoute
          exact
          path="/profile/:username/exercises"
          component={ExerciseTable}
        />
        <PrivateRoute exact path="/profile/:username" component={User} />
      </div>
    );
  }
}
