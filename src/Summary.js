import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dashboard from "views/Dashboard/Dashboard.jsx"



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

class Summary extends React.Component {
  constructor(props) {
    super();
    this.state = {
      test: '',
      classes: props,

    }
}
componentDidMount() {
  this.setState({test: 'something'})
}


  render() {
    console.log('something2')

    return (<div className="App">
      <Dashboard />
          <Fab color="primary" aria-label="Add" className={this.state.classes.fab}>
        <AddIcon />
      </Fab>
    <Card style={{ width: "20rem" }}>
      <CardBody>
        <h4 className={this.state.classes.cardTitle}>Card Title</h4>
        <h6 className={this.state.classes.cardSubtitle}>Card Subtitle</h6>
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
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
    something: state.something,
  }
}

export default withRouter(connect(mapState, {})(Summary))
