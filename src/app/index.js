// @flow
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Header from '../header'
import {
  MapChooser,
  MapExplorer,
  TravelerDirectory,
  TravelerProfile,
  NoMatch
} from '../main'
import './bootstrap.css'
import './index.css'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Redirect exact from='/' to='/maps/countries-of-the-world' />
        <Route exact path='/maps' component={MapChooser} />
        <Route path='/maps/:mapSlug' component={MapExplorer} />
        <Route exact path='/travelers' component={TravelerDirectory} />
        <Route path='/travelers/:username' component={TravelerProfile} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}

export default App
