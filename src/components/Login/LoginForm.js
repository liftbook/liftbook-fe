import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './LoginForm.css'

class LoginForm extends React.Component {
    state = {
        username: "",
        password: ""
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const credentials = this.state;
        axios
            .post("https://lift-book.herokuap.com/users/login", credentials)
            .then(res => {
                const username = res.data.username;
                const token = res.data.token;
                localStorage.setItem("token", token);
                localStorage.setItem("username", username);
                this.props.history.push("/home");
                console.log("Logged In");
            })
            .catch(err => console.log(err.response))
    };

    render() {
        return (
            <div>
                <h1>LiftBook</h1>
                <div className='login'>
                    <h2>Log In</h2>
                    <form className='loginForm' onSubmit={this.handleSubmit}>
                        <div className='inputs'>
                            <input
                                type='username'
                                name='username'
                                placeholder='Username'
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button onClick={this.handleSubmit} className='loginButton'>Log In</button>
                    </form>
                    <div className='newAccountLink'>
                        <p>Don't have an account yet?</p>
                        <Link to='/users/register' className='registerLink'>Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;