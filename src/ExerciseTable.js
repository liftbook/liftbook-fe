import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
// import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
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
  getUserLogs,
  clearWorkout
} from "./actions";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: props,
      exercises: [],
      exerciseArray: [],

    };
  }

  componentDidMount() {

  }
  comonentWillUnmount() {
    this.clearWorkout()
    this.setState({exerciseArray: []})
  }
  deleteExercise = (workout) => {
    this.props.deleteExercise(workout)

  }
  render() {
 


    this.props.exercises.map((workout, key) => {
      this.state.exerciseArray.push([
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
              this.deleteExercise(workout);
            }}
            justIcon
            size="sm"
            color="danger"
          >
            <Close />
          </Button>
          <Button 
          onClick={(event) => {this.props.history.push("/edit")}}
          justIcon size="sm" color="info">
            
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
          this.state.exerciseArray
          //   ["1", "Andrew Mike", "Develop", "2013", "€ 99,225", fillButtons],
          //   ["2", "John Doe", "Design", "2012", "€ 89,241", roundButtons],
          //   ["3", "Alex Mike", "Design", "2010", "€ 92,144", simpleButtons]
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
      { getUser, clearWorkout, getExercises, deleteExercise, editExercise, getUserLogs }
    )(Tables)
  )
);
