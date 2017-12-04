// @flow
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Header from './components/header.js'
import NoMatch from './components/noMatch.js'
import MapChooser from './containers/mapChooser.js'
import MapExplorer from './containers/mapExplorer.js'
import TravelerDirectory from './containers/travelerDirectory.js'
import TravelerProfile from './containers/travelerProfile.js'

const App = () => {
  return (
    <div style={{ display: 'flex', flexFlow: 'column', minHeight: '100vh' }}>
      <div style={{ flex: '0 1 auto' }}>
        <Header />
      </div>
      <div style={{ flex: '1 1 auto', position: 'relative' }}>
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
