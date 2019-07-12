import React, { Component } from 'react';
import logo from './logo.svg';
import Log from './Log'
import './App.css';

import { BrowserRouter as Route, Switch, Link } from "react-router-dom";

// material-ui components
// core components

import Button from 'components/CustomButtons/Button.jsx';
import { connect } from 'react-redux'
import { withRouter } from "react-router";


import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


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






class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      one: 'one',
      classes: props,
    }
  }
  
  componentDidMount() {
    this.setState({one: 'something'})
  }
  render() {
    console.log('something')
  return (<div className="App">
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




    <div>
      hi
      <Link to="/History">Hi</Link>
      <Switch>
      <Route exact path="/History" exact component={Log} />
      </Switch>

 </div>
 <div>
 <Route exact path="/"  component={App} />

      </div>
    </div>
 
  );
}
}

const mapState = state => {
  return {something: state.something,}

}

export default withRouter(connect(mapState, null)(App))
