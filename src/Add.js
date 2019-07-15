import React, { Component } from "react";

export default class Add extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Name of Exercise</label>
          <input type="text" className="form-control" />
        </div>
      </form>
    );
  }
}
