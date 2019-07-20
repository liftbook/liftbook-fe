import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { getUsers, getUser, getExercise, getExercises } from "./actions";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";

// import Dashboard from "views/Dashboard/Dashboard.jsx"
import Drawer from "@material-ui/core/Drawer";

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "assets/jss/material-kit-pro-react.jsx";

// const style = {
//   cardTitle,
//   cardLink,
//   cardSubtitle
// };

var moment = require("moment");
moment().format();

class Summary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: props
    };
  }
  componentDidMount() {
    this.props.getUsers();
  }

  getUser = event => {
    this.props.getUser(event.target.innerHTML);
    this.props.history.push(`/users/${event.target.innerHTML}`);
    // this.props.getLogs(user);
  };

  render() {
    console.log("something2");

    return (
      <div>
        {this.props.users.map((user, key) => {
          return (
            <div onClick={event => this.getUser(event)} key={key}>
              {user.username}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: state.users
  };
};

export default withRouter(
  connect(
    mapState,
    { getUsers, getUser, getExercise, getExercises }
  )(Summary)
);
