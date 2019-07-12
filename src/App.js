import React from 'react';
import logo from './logo.svg';
// import History from './components/History'
import { BrowserRouter as Route } from "react-router-dom";

// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from 'components/CustomButtons/Button.jsx';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }  
  render() {
  return (
    <div className="App">
    <Button type="button" color="primary">Primary</Button>
    </div>
  );
}
}
