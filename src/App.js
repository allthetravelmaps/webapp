import React, { Component } from 'react'
import firebase from 'firebase'
import logo from './logo.svg'
import './App.css'
import { Button } from 'reactstrap'

class App extends Component {
  render () {
    const config = {
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_PROJECT_ID + '.firebaseapp.com',
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_PROJECT_ID + '.appspot.com'
    }
    const fbapp = firebase.initializeApp(config, 'travelmapaddict')

    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React & Firebase</h1>
        </header>
        <h4>Firebase SDK Version: {firebase.SDK_VERSION}</h4>
        <h4>Firebase Initialized App '{fbapp.name}' with config:</h4>
        <Button>Testing, testing</Button>
        <ul>
          {Object.keys(fbapp.options).map(key => (
            <ul key={key}>
              {key}: {fbapp.options[key]}
            </ul>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
