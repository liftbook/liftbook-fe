import React, { Component, PropTypes } from "react";
import { addWorkout } from "./actions";
import { connect } from "react-redux";
import "./Add.css";

// material-ui imports
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";

class Add extends Component {
  state = {
    name: "",
    weight: "",
    reps: "",
    date: "",
    bodyPart: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, weight, reps, date, bodyPart } = this.state;
    const newWorkout = { name, weight, reps, date, bodyPart };
    this.props.addWorkout(newWorkout);
    this.setState({
      name: "",
      weight: "",
      reps: "",
      date: "",
      bodyPart: ""
    });
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl className="input-style">
          <InputLabel>NAME OF EXERCISE</InputLabel>
          <Input
            onChange={this.changeHandler}
            value={this.state.name}
            name="name"
            type="text"
          />
        </FormControl>

        <br />

        <FormControl className="input-style">
          <InputLabel>WEIGHT LIFTED</InputLabel>
          <Input
            onChange={this.changeHandler}
            value={this.state.weight}
            name="weight"
            type="number"
          />
        </FormControl>

        <br />

        <FormControl className="input-style">
          <InputLabel className="input-label">REPS COMPLETED</InputLabel>
          <Input
            onChange={this.changeHandler}
            value={this.state.reps}
            name="reps"
            type="number"
          />
        </FormControl>

        <br />

        <FormControl className="input-style">
          <InputLabel className="input-label">DATE</InputLabel>
          <Input
            onChange={this.changeHandler}
            value={this.state.date}
            name="date"
            type="number"
          />
        </FormControl>

        <br />
        <br />

        <FormControl className="input-style">
          <NativeSelect>
            <option value="" disabled>
              BODY PART
            </option>
            <option>BICEPS</option>
            <option>TRICEPS</option>
            <option>BACK</option>
            <option>CHEST</option>
            <option>SHOULDERS</option>
            <option>ABS</option>
            <option>LEGS</option>
            <option>MISC</option>
          </NativeSelect>
          <FormHelperText>BODY PART</FormHelperText>
        </FormControl>

        <br />
        <br />

        <Button variant="outlined" onSubmit={this.handleSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workouts
  };
};

export default connect(
  mapStateToProps,
  { addWorkout }
)(Add);
