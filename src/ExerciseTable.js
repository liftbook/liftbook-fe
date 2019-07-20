import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
// core components
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { getUsers, getUser, deleteExercise, editExercise, getExercises } from "./actions";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/contentAreas.jsx";
const exerciseArray = []

class Tables extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props,
            workouts: [],
        }
    }

 
      
    componentDidMount() {
        this.props.getExercises(this.props.currentUser.username)
    }


     render() {
        this.props.workouts.map((workout, key) => {
            exerciseArray.push(            
                    [ workout.name,workout.name, workout.weight_lifted, workout.repetitions, workout.body_part,         <div><Button 
                        onClick={(event) => {this.props.deleteExercise(workout)}}
                    justIcon size="sm" color="danger" key={key}>
                      <Close />
                    </Button>
                    <Button 
                    justIcon size="sm" color="info" key={key}>
                      <Edit />
                    </Button></div>],
         )})
    return (
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
    );
}
}

const mapState = state => {
    return {
      workouts: state.workouts,
      currentUser: state.currentUser,
    }
  }
  
  export default withStyles(style)(withRouter(connect(mapState, {getUser, getExercises, deleteExercise, editExercise})(Tables)))
