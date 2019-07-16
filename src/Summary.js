import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route, Link } from "react-router-dom";
import Add from "./Add";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Sidebar from "components/Sidebar/Sidebar.jsx"
import EcommercePage from 'views/EcommercePage/EcommercePage.jsx'

// import Dashboard from "views/Dashboard/Dashboard.jsx"
import Drawer from '@material-ui/core/Drawer';

import { getUsers } from "./actions";

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

  render() {
    console.log("something2");

    return (<div></div>)
}
}

const mapState = state => {
  return {
    user: state.user
  };
};

export default withRouter(
  connect(
    mapState,
    { getUsers }
  )(Summary)
);
