import React from 'react';
import logo from '../logo.svg';
import '../styles/landing-page.css';
import Example from '../components/example.jsx'


function App() {
  return (
    <div className="Example">
      <header className="Login-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Example />
      <Example />
    </div>
  );
}

export default App;
