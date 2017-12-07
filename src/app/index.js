// @flow
import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Header from '../containers/header'
import NoMatch from '../components/no-match.js'
import MapExplorer from '../containers/map-explorer.js'
import {
  MapSearchInterface,
  TravelerSearchInterface
} from '../containers/search-interface.js'
import TravelerProfile from '../containers/traveler-profile.js'
import './index.css'

const MainCentered = () => (
  <div id='main-centered-parent'>
    <div id='main-centered-child'>
      <Switch>
        <Route exact path='/maps' component={MapSearchInterface} />
        <Route exact path='/travelers' component={TravelerSearchInterface} />
        <Route path='/travelers/:username' component={TravelerProfile} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </div>
)

const App = () => (
  <div style={{ display: 'flex', flexFlow: 'column', minHeight: '100vh' }}>
    <div style={{ flex: '0 0 auto' }}>
      <Header />
    </div>
    <div style={{ flex: '1 1 auto', position: 'relative' }}>
      <Switch>
        <Redirect exact from='/' to='/maps/countries-of-the-world' />
        <Route path='/maps/:mapSlug' component={MapExplorer} />
        <Route component={MainCentered} />
      </Switch>
    </div>
  </div>
)

export default App
