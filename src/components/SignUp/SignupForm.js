import React from "react";
import { Link } from "react-router-dom";

import "./SignupForm.css";
import Axios from "axios";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      credentials: {
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const register = this.state;
    Axios.post("https://lift-book.herokuapp.com/api", register)
      .then(res => {
        this.props.history.push("/login");
      })
      .catch(err => console.log(err.response));
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
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
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
            <button className="signupButton" onClick={this.handleSubmit}>
              Sign Up
            </button>
          </form>
          <div className="loginLink">
            <p>Already have an account?</p>
            <Link to="/" className="loginLink">
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignupForm;