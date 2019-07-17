import React from 'react';
import { connect } from 'react-redux';
import { login } from './actions'
import { Link } from 'react-router-dom';
import LoginPage from './views/LoginPage/LoginPage.jsx'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credentials: {
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
        e.preventDefault();
        this.props
            .login(this.state.credentials)
            .then(() => this.props.history.push('/users'))
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
                                value={this.state.credentials.username}
                                onChange={this.handleChange}
                            />
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={this.state.credentials.password}
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

const mapStateToProps = ({ isLoggedIn }) => ({
    isLoggedIn
});

export default connect(
    mapStateToProps,
    { login }
)(LoginForm)