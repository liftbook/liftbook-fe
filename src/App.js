import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignUp/SignupForm';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" /> */}
      <Route exact path="/" render={props => <LoginForm {...props} />} />
      <Route path='/users/register' render={props => <SignupForm {...props} />} />
    </div>
  );
}

export default App;
