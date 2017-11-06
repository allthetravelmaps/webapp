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
        <div className='container-fluid'>
          <div className='row'>
            <div className='App-cell col-60 col-sm-30 col-md-20 col-lg-15 col-xl-12 col-ll-10'>
              <Button>Test, test</Button>
            </div>
            {Object.keys(fbapp.options).map(key => (
              <div
                key={key}
                className='App-cell col-60 col-sm-30 col-md-20 col-lg-15 col-xl-12 col-ll-10'
              >
                {key}: {fbapp.options[key]}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App
