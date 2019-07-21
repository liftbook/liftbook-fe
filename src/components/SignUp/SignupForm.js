import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions";
import { Link } from "react-router-dom";

import "./SignupForm.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    console.log(this.state.credentials);
    e.preventDefault();
    this.props
      .signup(this.state.credentials)
      .then(() => this.props.history.push("/"));
    this.setState({
      credentials: {
        ...this.state.credentials,
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: ""
      }
    });
  };

  render() {
    return (
      <div>
        <h1>LiftBook</h1>
        <div className="signup">
          <h2>Sign Up</h2>
          <form className="signupForm" onSubmit={this.handleSubmit}>
            <div className="inputs">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={this.state.first_name}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={this.state.last_name}
                onChange={this.handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                type="username"
                name="username"
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <Link to="/login" className="signupLink">
              <button className="signupButton" onClick={this.handleSubmit}>
                Sign Up
              </button>
            </Link>
          </form>
          <div className="loginLink">
            <p>Already have an account?</p>
            <Link to="/login" className="loginLink">
              Log In
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = ({ isSignedUp }) => ({
  isSignedUp
});

export default connect(
  mapStateToProps,
  { signup }
)(SignupForm);
