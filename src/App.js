import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header" /> */}
      <Route exact path="/" render={props => <LoginForm {...props} />} />
    </div>
  );
}

export default App;
