import React from 'react';
import { connect } from 'react-redux'
// import {logSet, saveSession} from './actions'
import { BrowserRouter as Link } from "react-router-dom";
import { withRouter } from "react-router";



var moment = require('moment');
moment().format();

class History extends React.Component {
  constructor() {
    super();
    this.state = {

    }
}


  render() {
    return (<div>
        <h1>history</h1>
     </div>
  )}
}

const mapState = state => {
  return {
  }
}

export default withRouter(connect(mapState, {})(History))
