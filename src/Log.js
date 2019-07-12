import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router";

// import {logSet, saveSession} from './actions'
import { BrowserRouter as Link, Route } from "react-router-dom";



var moment = require('moment');
moment().format();

class Log extends React.Component {
  constructor() {
    super();
    this.state = {
      test: '',
    }
}
componentDidMount() {
  this.setState({test: 'something'})
}


  render() {
    console.log('something2')

    return (<div className="App">
        <h1>TEST</h1>
     </div>
  )}
}

const mapState = state => {
  return {
    something: state.something,
  }
}

export default withRouter(connect(mapState, {})(Log))
