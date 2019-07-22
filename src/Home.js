import React from "react";
import "./App.css";

// material-ui components
import PersistentDrawerLeft from "./SideMenu";

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

        {/* <PrivateRoute exact path="/users/[username]/logs/[exerciseId]" component={DeleteFriend} /> */}
      </div>
    );
  }
}
