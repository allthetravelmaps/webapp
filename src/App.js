import React, { Component } from 'react';
// TODO: is this importing unneeded things? (ex: messaging module)
import * as firebase from 'firebase';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // TODO: fill these in with env vars
    // https://webpack.js.org/guides/environment-variables/
    const config = {
      apiKey: "<API_KEY>",
      authDomain: "<PROJECT_ID>.firebaseapp.com",
      databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
      storageBucket: "<BUCKET>.appspot.com",
    };
    firebase.initializeApp(config);

    // TODO: add something like a firebase.printConfig() in here
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
