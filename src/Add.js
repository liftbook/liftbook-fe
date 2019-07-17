import React, { Component } from "react";
import "./Add.css";

import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import CustomInput from "components/CustomInput/CustomInput.jsx";

// @material-ui/icons
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
// core components
import customInputStyle from "assets/jss/material-dashboard-react/components/customInputStyle.jsx";

// Material-Ui
import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";

import Select from "@material-ui/core/Select";

const formStyle = {
  color: "green"
};

export default class Add extends Component {
  render() {
    return (
      <form>
        <FormControl>
          <InputLabel>Name of Exercise</InputLabel>
          <Input />
        </FormControl>

        <br />

        <FormControl>
          <InputLabel>Amount Lifted</InputLabel>
          <Input />
        </FormControl>

        <br />

        <FormControl>
          <InputLabel>Reps completed</InputLabel>
          <Input />
        </FormControl>

        <br />

        <FormControl>
          <InputLabel>Date</InputLabel>
          <Input />
        </FormControl>

        <br />
        <br />

        <FormControl>
          <NativeSelect>
            <option value="" disabled>
              Body Part
            </option>
            <option>Bicep</option>
            <option>Triceps </option>
            <option>Back</option>
            <option>Shoulder</option>
          </NativeSelect>
          <FormHelperText>Body Part</FormHelperText>
        </FormControl>
      </form>
    );
  }
}
