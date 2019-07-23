import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
import Table from "components/Table/Table.jsx";
import Paper from "@material-ui/core/Paper";

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
  clearWorkout,
  setCurrentWorkout,
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

      deleted: this.props.deleted,
      // log: {
      //   username: props.currentUser.username,
      //   exercise: props.currentWorkout.name,
      // },
    };
  }
  componentDidMount() {

    setTimeout(() => {
      console.log('Our data is fetched');
      this.props.getExercises(this.props.currentUser.uid)

    }, 1500)

    // this.setState({exercises: this.props.exercises})
  }
  componentWillUnmount() {
    this.setState({exerciseArray: []})
  }
  // getDataDelay(){
  //   setTimeout(() => {
  //     console.log('Our data is fetched');
  //     this.props.getExercises(this.props.currentUser.uid)

  //   }, 5000)
  // }
  // getData(){
    setWorkout = (workout) => {
      this.props.setCurrentWorkout(workout)
         this.props.history.push(`/edit`)

    }
  // }
  // handleEdit = (workout) => {
  //   this.props.setCurrentWorkout(workout)
  //  this.props.history.push(`/edit/${workout.eid}`)
  // }


  // componentDidUpdate() {
  //   if (this.state.deleted === true) {
  //     alert('hi')
  //     this.props.getExercises(this.props.currentUser.uid)
  //     this.setState({deleted: !this.state.deleted})
  //   }
  // }
  deleteExercise = (event, workout) => {
    this.props.deleteExercise(workout)
    this.props.clearWorkout() 
    console.log(this.state.exerciseArray)
    this.setState({exerciseArray: []})
    this.componentDidMount()


    // this.getDataDelay()
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
            onClick={(event) => {
              this.deleteExercise(event, workout);
            }}
            justIcon
            size="sm"
            color="danger"
          >
            <Close />
          </Button>
          <Button 
            onClick={(event) => {
              this.setWorkout(workout.eid)
            }}
            justIcon size="sm" color="info">
            
            <Edit />
          </Button>
        </div>
      ]);
    });
    return (
      <div>
        <Paper className={this.state.classes.root}>

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
        </Paper>

      
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
    deleting: state.deleting,
  };
};

export default withStyles(style)(
  withRouter(
    connect(
      mapState,
      { getUser, clearWorkout, getExercises, deleteExercise, editExercise, getUserLogs, setCurrentWorkout }
    )(Tables)
  )
);
