// @flow
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Header from '../components/header'
import NoMatch from '../components/noMatch'
import MapChooser from '../containers/mapChooser'
import MapExplorer from '../containers/mapExplorer'
import TravelerDirectory from '../containers/travelerDirectory'
import TravelerProfile from '../containers/travelerProfile'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const App = () => {
  return (
    <div className='app'>
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-main'>
        <Switch>
          <Redirect exact from='/' to='/maps/countries-of-the-world' />
          <Route exact path='/maps' component={MapChooser} />
          <Route path='/maps/:mapSlug' component={MapExplorer} />
          <Route exact path='/travelers' component={TravelerDirectory} />
          <Route path='/travelers/:username' component={TravelerProfile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  )
}

export default App
