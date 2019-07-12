import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './SignupForm.css';

class SignupForm extends React.Component {
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
        const log = this.state;
        axios
            .post("https://lift-book.herokuapp.com/users/register", log)
            .then(res => {
                this.props.history.push('/users/login')
            })
            .catch(err => console.log(err.response));
    };

    render() {
        return (
            <div>
                <h1>LiftBook</h1>
                <div className='signup'>
                    <h2>Sign Up</h2>
                    <form className='signupForm' onSubmit={this.handleSubmit}>
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
                        <button className='signupButton' onClick={this.handleSubmit}>Sign Up</button>
                    </form>
                    <div className='loginLink'>
                        <p>Already have an account?</p>
                        <Link to='/' className='loginLink'>Log In</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignupForm;