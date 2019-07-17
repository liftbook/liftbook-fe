import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Sidebar from "components/Sidebar/Sidebar.jsx"
import EcommercePage from 'views/EcommercePage/EcommercePage.jsx'
// import Dashboard from "views/Dashboard/Dashboard.jsx"
import Drawer from '@material-ui/core/Drawer';
import Add from './Add'
import { getUser } from './actions'
import { Route, Switch, Link } from "react-router-dom";


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

var moment = require('moment');
moment().format();

class User extends React.Component {
  constructor(props) {
    super();
    this.state = {
      classes: props,
    }
}
componentDidMount() {
  // this.props.getUser()
  // this.props.getExercises();
  // // this.props.getExercise();
  // // this.props.getGoals();
  // // this.props.getGoal();
}

  render() {
    console.log('something2')

    return (<div className="App">

      <Link to="/add">
          <Fab
            color="primary"
            aria-label="Add"
            className={this.state.classes.fab}
          >
            <AddIcon />
          </Fab>
        </Link>
    <Card style={{ width: "20rem" }}>
      <CardBody>
        <h4 className={this.state.classes.cardTitle}>Card Title</h4>
        <h6 className={this.state.classes.cardSubtitle}>Card Subtitle</h6>
        <div>

          <p>{this.props.user.created_at}</p>
          <p>{this.props.user.email}</p>
          <p>{this.props.user.first_name}</p>
          <p>{this.props.user.last_name}</p>
          <p>{this.props.user.password}</p>
          <p>{this.props.user.updated_at}</p>
          <p>{this.props.user.username}</p>
          </div>

        <a
          href="#pablo"
          className={this.state.classes.cardLink}
          onClick={e => e.preventDefault()}
        >
          Card link
        </a>
        <a
          href="#pablo"
          className={this.state.classes.cardLink}
          onClick={e => e.preventDefault()}
        >
          Another link
        </a>
      </CardBody>
    </Card>
     </div>
  )}
}

const mapState = state => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapState, {getUser})(User))
