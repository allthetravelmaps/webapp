// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import './bootstrap.css'
import './index.css'
import App from './App'

const rootElem = document.getElementById('root')
if (!rootElem) throw new Error('Root element not found')
ReactDOM.render(<App />, rootElem)
