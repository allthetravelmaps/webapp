import React, { Component } from 'react';
import firebase from 'firebase';
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
    const fbapp = firebase.initializeApp(config, 'travelmapaddict');

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React & Firebase</h1>
        </header>
        <h4>Firebase SDK Version: {firebase.SDK_VERSION}</h4>
        <h4>Firebase Initialized App '{fbapp.name}' with config:</h4>
        <ul>
          {Object.keys(fbapp.options).map(key => <ul key={key}>{key}: {fbapp.options[key]}</ul>)}
        </ul>
      </div>
    );
  }
}

export default App;
