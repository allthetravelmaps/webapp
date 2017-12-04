// @flow
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Header from './components/header.js'
import NoMatch from './components/no-match.js'
import MapChooser from './containers/map-chooser.js'
import MapExplorer from './containers/map-explorer.js'
import TravelerDirectory from './containers/traveler-directory.js'
import TravelerProfile from './containers/traveler-profile.js'

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
