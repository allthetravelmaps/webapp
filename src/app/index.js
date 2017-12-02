// @flow
import React from 'react'
import './bootstrap.css'
import './index.css'
import firebase from 'firebase'
import Header from '../header'
import Main from '../main'

const App = (props: {}) => {
  if (!process.env.REACT_APP_API_KEY) {
    throw new Error('REACT_APP_API_KEY undefined')
  }
  if (!process.env.REACT_APP_PROJECT_ID) {
    throw new Error('REACT_APP_PROJECT_ID undefined')
  }
  const config = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_PROJECT_ID}.firebaseapp.com`,
    projectId: `${process.env.REACT_APP_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_PROJECT_ID}.appspot.com`
  }
  const fbapp = firebase.initializeApp(
    config,
    `${process.env.REACT_APP_PROJECT_ID}`
  )

  return (
    <div>
      <Header />
      <Main fbapp={fbapp} sdkVersion={firebase.SDK_VERSION} />
    </div>
  )
}

export default App
