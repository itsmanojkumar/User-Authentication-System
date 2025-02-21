import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import GoogleLoginButton from './GoogleLoginButton'

function App() {
  return (
    <div className="App">
      <div id='parent1'>

      <div><Login/></div>
      <GoogleLoginButton/>
      </div>

    </div>
  );
}

export default App;
