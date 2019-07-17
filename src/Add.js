import React, { Component } from "react";
import "./Add.css";

// material-ui imports
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormHelperText from "@material-ui/core/FormHelperText";

export default class Add extends Component {
  state = {
    name: "",
    weight: "",
    reps: "",
    date: "",
    bodyPart: ""
  };

  render() {
    return (
      <form>
        <FormControl className="input-style">
          <InputLabel>NAME OF EXERCISE</InputLabel>
          <Input />
        </FormControl>

        <br />

        <FormControl className="input-style">
          <InputLabel>WEIGHT LIFTED</InputLabel>
          <Input />
        </FormControl>

        <br />

        <FormControl className="input-style">
          <InputLabel className="input-label">REPS COMPLETED</InputLabel>
          <Input />
        </FormControl>

        <br />

        <FormControl className="input-style">
          <InputLabel className="input-label">DATE</InputLabel>
          <Input />
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

        <Button variant="outlined">Submit</Button>
      </form>
    );
  }
}
