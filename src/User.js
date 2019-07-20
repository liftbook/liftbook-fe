import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router";
import UserProfile from './views/UserProfile/UserProfile.jsx'
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import { getUsers, getUser, getExercise, getExercises } from "./actions";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

// import Sidebar from "components/Sidebar/Sidebar.jsx"
// import EcommercePage from 'views/EcommercePage/EcommercePage.jsx'
// // import Dashboard from "views/Dashboard/Dashboard.jsx"
// import Drawer from '@material-ui/core/Drawer';
// import Add from './Add'
import { Link } from "react-router-dom";
import RecipeReviewCard from './MediaCard'
import Icon from '@material-ui/core/Icon';
import PersistentDrawerLeft from './SideMenu'
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

var moment = require('moment');
moment().format();
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));
class User extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: props,
    }
}
componentDidMount() {
  this.props.getUsers()
}

getUser = event => {
  // this.props.getLogs(user);
  
}


  render() {
    console.log('something2')

    return (<div className="App">
      <Paper className={this.state.classes.root}>
      <UserProfile className="app" user={this.props.currentUser.username} all={this.props}/>
    </Paper>

    <div className="profile">
      <div className="leftcolumn"></div>
      <div className="mainColumn"></div>
    </div>


     </div>
  )}
}

const mapState = state => {
  return {
    user: state.user,
    logs: state.logs,
    name: state.name,
    weight_lifted: state.weight_lifted,
    repetitions: state.repetitions,
    date: state.date,
    body_part: state.body_part,
    currentUser: state.currentUser,
  }
}

export default withRouter(connect(mapState, {getUser})(User))
