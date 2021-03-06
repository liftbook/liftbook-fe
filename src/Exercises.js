import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import UserProfile from './views/UserProfile/UserProfile.jsx'
// import Card from "components/Card/Card.jsx";
// import CardBody from "components/Card/CardBody.jsx";
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import Paper from "@material-ui/core/Paper";
import { getUser, getExercises, getExercise, toLogs, clearWorkout, getUserLogs } from "./actions";
import Tables from "./ExerciseTable";
// import Sidebar from "components/Sidebar/Sidebar.jsx"
// import EcommercePage from 'views/EcommercePage/EcommercePage.jsx'
// // import Dashboard from "views/Dashboard/Dashboard.jsx"
// import Drawer from '@material-ui/core/Drawer';
// import Add from './Add'
// // import RecipeReviewCard from './MediaCard'
// import Icon from '@material-ui/core/Icon';
// import PersistentDrawerLeft from './SideMenu'
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

var moment = require("moment");
moment().format();
// var uniqid = require('uniqid');

class Exercises extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: props,
      log: {
        username: props.currentUser.username,
        exercise: props.currentWorkout.name,
      }
    };
  }
  componentDidMount() {
    // this.props.toLogs(this.state.log)
    this.props.getExercises(this.props.currentUser.uid)
    // this.props.getUserLogs(this.props.currentUser.username)
  }

  render() {
    console.log("something5");

    return (
      <div className="App">
        <Paper className={this.state.classes.root}>
          <Tables  />
        </Paper>

        <div className="profile">
          <div className="leftcolumn"></div>
          <div className="mainColumn"></div>
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    workouts: state.workouts,
    currentUser: state.currentUser,
    currentWorkout: state.currentWorkout,
    logs: state.logs,
  };
};

export default withRouter(
  connect(
    mapState,
    { getUser, toLogs, getExercises, getExercise, clearWorkout, getUserLogs }
  )(Exercises)
);
