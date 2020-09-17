import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <div>
          <form>
          <label>
            email:
            <input type="email" name="email" required="true" />
            password
            <input type="password" name="password" required="true" minlength="5" maxlength="15"/>
          </label>
          <input type="submit" value="submit" />
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
