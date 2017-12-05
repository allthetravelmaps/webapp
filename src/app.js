// @flow
import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Header from './components/header.js'
import NoMatch from './components/no-match.js'
import MapExplorer from './containers/map-explorer.js'
import {
  MapSearchInterface,
  TravelerSearchInterface
} from './containers/search-interface.js'
import TravelerProfile from './containers/traveler-profile.js'

const App = () => {
  return (
    <div style={{ display: 'flex', flexFlow: 'column', minHeight: '100vh' }}>
      <div style={{ flex: '0 1 auto' }}>
        <Header />
      </div>
      <div
        style={{
          flex: '1 1 auto',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <Switch>
          <Redirect exact from='/' to='/maps/countries-of-the-world' />
          <Route exact path='/maps' component={MapSearchInterface} />
          <Route path='/maps/:mapSlug' component={MapExplorer} />
          <Route exact path='/travelers' component={TravelerSearchInterface} />
          <Route path='/travelers/:username' component={TravelerProfile} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </div>
  )
}

export default App
