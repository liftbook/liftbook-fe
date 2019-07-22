
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import Pagination from './components/Pagination/Pagination.jsx'
// core components
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  getUsers,
  getUser,
  deleteExercise,
  editExercise,
  getExercises,
  getUserLogs
} from "./actions";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
const exerciseArray = [];
  import React  from 'react';
  import PropTypes from 'prop-types';
  import {render} from 'react-dom';
 
  //Material UI Dependency for touch / tap / click events
  import injectTapEventPlugin from 'react-tap-event-plugin';
  injectTapEventPlugin();
 
  //Material UI Components
  import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
  import {Card} from 'material-ui/Card';
  import Divider from 'material-ui/Divider';
  import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
 
  //Import the pagination component
  import Pagination from 'materialui-pagination';
 
  //Demo API to simulate async actions
  import RowApi from './api/rows';
 
  class Tables extends React.Component {
 
      constructor(props, context) {
          super(props, context);
    
          this.state = {
            rowsPerPage: [5,10,15],
            rows:     this.props.filtered.map((workout, key) => {
                exerciseArray.push([
                  workout.created_at,
                  workout.name,
                  workout.weight_lifted,
                  workout.repetitions,
                  workout.body_part,
                  <div>
                    <Button
                      onClick={() => {
                        this.props.history.push(`/add`);
                      }}
                      justIcon
                      size="sm"
                      color="success"
                    >
                      <Add />
                    </Button>
                    <Button
                      onClick={event => {
                        this.props.deleteExercise(workout);
                      }}
                      justIcon
                      size="sm"
                      color="danger"
                    >
                      <Close />
                    </Button>
                    <Button justIcon size="sm" color="info">
                      <Edit />
                    </Button>
                  </div>
                ]);
              }),
            numberOfRows: 5,
            page: 1,
            total: undefined,
            classes: props,
            exercises: [],
          };
 
      }
 
      componentDidMount() {
        this.props.getUserLogs(this.props.currentUser.username)
      }
      componentWillMount() {
        RowApi.getRows(this.state)
        .then((updatedState) => {
          this.setState(updatedState);
        });
      }
 
      updateRows(state){
        RowApi.getRows(state)
        .then((updatedState) => {
          this.setState(updatedState);
        });
      }
 
      render(){

          return (
            <MuiThemeProvider>
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHeaderColumn>Row Number</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                  {this.state.rows.map((row, index) => {
                      return (
                        <TableRow key={index}>
                          <TableRowColumn>{row}</TableRowColumn>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                <Divider />
                <Pagination
                  total={this.state.total}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  numberOfRows={this.state.numberOfRows}
                  updateRows={this.updateRows}
                />
              </Card>
            </MuiThemeProvider>
          );
      }
  }

  const mapState = state => {
    return {
      logs: state.logs,
      currentUser: state.currentUser,
      exercises: state.exercises,
    };
  };
  
  export default withStyles(style)(
    withRouter(
      connect(
        mapState,
        { getUser, getExercises, deleteExercise, editExercise, getUserLogs }
      )(Tables)
    )
  );
  


  import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';
import Pagination from './components/Pagination/Pagination.jsx'
// core components
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  getUsers,
  getUser,
  deleteExercise,
  editExercise,
  getExercises,
  getUserLogs
} from "./actions";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
const exerciseArray = [];

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
      exercises: [],
    };
  }

  componentDidMount() {
    this.props.getUserLogs(this.props.currentUser.username)
  }

  render() {
 


    this.props.filtered.map((workout, key) => {
      exerciseArray.push([
        workout.created_at,
        workout.name,
        workout.weight_lifted,
        workout.repetitions,
        workout.body_part,
        <div>
          <Button
            onClick={() => {
              this.props.history.push(`/add`);
            }}
            justIcon
            size="sm"
            color="success"
          >
            <Add />
          </Button>
          <Button
            onClick={event => {
              this.props.deleteExercise(workout);
            }}
            justIcon
            size="sm"
            color="danger"
          >
            <Close />
          </Button>
          <Button justIcon size="sm" color="info">
            <Edit />
          </Button>
        </div>
      ]);
    });

    return (
      <div>
      <Table
        tableHead={[
          "Date",
          "Name",
          "Weight Lifted",
          "Repetitions",
          "Body Part",
          "Actions"
        ]}
        tableData={
          exerciseArray
        }
        customCellClasses={[
          this.state.classes.textCenter,
          this.state.classes.textRight,
          this.state.classes.textRight
        ]}
        customClassesForCells={[0, 4, 5]}
        customHeadCellClasses={[
          this.state.classes.textCenter,
          this.state.classes.textRight,
          this.state.classes.textRight
        ]}
        customHeadClassesForCells={[0, 4, 5]}
      />
      {/* <Pagination /> */}
      </div>
    );
  }
}

const mapState = state => {
  return {
    logs: state.logs,
    currentUser: state.currentUser,
    exercises: state.exercises,
  };
};

export default withStyles(style)(
  withRouter(
    connect(
      mapState,
      { getUser, getExercises, deleteExercise, editExercise, getUserLogs }
    )(Tables)
  )
);
