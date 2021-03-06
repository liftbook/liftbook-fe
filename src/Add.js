import React, { Component } from "react";
import { addWorkout } from "./actions";
import { connect } from "react-redux";
import "./Add.css";
import { toLogs, clearWorkout } from "./actions";

// material-ui imports
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";
import { withRouter } from "react-router";
class Add extends React.Component {

  constructor(props) {
    super();
    this.state = {
    user: props.currentUser.username,
    name: "",
    weight_lifted: "",
    repetitions: "",
    date: "",
    body_part: "",
    log: {
      username: props.currentUser.username,
      exercise: props.currentWorkout.name,
    }
  };
  
}

componentDidMount() {


}
  handleSubmit = e => {
    e.preventDefault();

    const {
      name,
      weight_lifted,
      repetitions,
      date,
      body_part,
      user
    } = this.state;

    const newWorkout = {
      name,
      weight_lifted,
      repetitions,
      date,
      body_part,
      user
    };

    this.props.addWorkout(newWorkout);

    this.setState({
      id: "",
      user: this.props.user,
      name: "",
      weight_lifted: "",
      repetitions: "",
      date: "",
      body_part: ""
    });
    // this.props.history.push(
    //   `/profile/${this.props.currentUser.username}/exercises`
    // );


  };

  // handle input change
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //handle option change
  handleChange = e => {
    const {
      name,
      weight_lifted,
      repetitions,
      date,
      body_part,
      user
    } = this.state;
    const newWorkout = {
      name,
      weight_lifted,
      repetitions,
      date,
      body_part,
      user
    };
    this.setState({ body_part: e.target.value });
    
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} key={this.id}>
        {/* Name Input */}
        <FormControl className="input-group">
          <InputLabel className="input-label">NAME OF EXERCISE</InputLabel>
          <Input
            className="input-style"
            onChange={this.changeHandler}
            value={this.state.name}
            name="name"
            type="text"
          />
        </FormControl>

        <br />
        {/* Weight Input */}
        <FormControl className="input-group">
          <InputLabel className="input-label">WEIGHT LIFTED</InputLabel>
          <Input
            className="input-style"
            onChange={this.changeHandler}
            value={this.state.weight_lifted}
            name="weight_lifted"
            type="number"
          />
        </FormControl>

        <br />
        {/* Reps Input */}
        <FormControl className="input-group">
          <InputLabel className="input-label">REPS COMPLETED</InputLabel>
          <Input
            className="input-style"
            onChange={this.changeHandler}
            value={this.state.repetitions}
            name="repetitions"
            type="number"
          />
        </FormControl>

        <br />
        {/* Date Input */}
        <FormControl className="input-group">
          <InputLabel className="input-label">DATE</InputLabel>
          <Input
            className="input-style"
            onChange={this.changeHandler}
            value={this.state.date}
            name="date"
            type="text"
          />
        </FormControl>

        <br />
        <br />

        {/* Dropdown */}
        <FormControl className="input-group">
          <NativeSelect
            value={this.state.body_part}
            onChange={this.handleChange}
            name="body_part"
          >
            <option value="" disabled>
              BODY PART
            </option>
            <option className="input-style" value="biceps">
              BICEPS
            </option>
            <option className="input-style" value="triceps">
              TRICEPS
            </option>
            <option className="input-style" value="back">
              BACK
            </option>
            <option className="input-style" value="chest">
              CHEST
            </option>
            <option className="input-style" value="shoulders">
              SHOULDERS
            </option>
            <option className="input-style" value="abs">
              ABS
            </option>
            <option className="input-style" value="legs">
              LEGS
            </option>
            <option className="input-style" value="misc">
              MISC
            </option>
          </NativeSelect>
          <FormHelperText className="input-label">BODY PART</FormHelperText>
        </FormControl>

        <br />
        <br />

        <Button
          variant="outlined"
          onClick={this.handleSubmit}
          className="submit"
        >
          Submit
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    workouts: state.workouts,
    currentUser: state.currentUser,
    currentWorkout: state.currentWorkout,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { addWorkout, toLogs, clearWorkout }
  )(Add)
);
