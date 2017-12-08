// @flow
import * as React from 'react'
import { Route, Switch } from 'react-router'

const MapSearchTitle = () => (
  <span className='header-title-emphasis'>Choose a Map</span>
)

const TravelerSearchTitle = () => (
  <span className='header-title-emphasis'>Travler Directory</span>
)

const MapExplorerTitle = (props: { match: * }) => (
  <div>
    <span className='header-title-emphasis'>You</span>
    <span>&nbsp;have explored&nbsp;</span>
    <span className='header-title-emphasis'>23.4%</span>
    <span>&nbsp;of&nbsp;</span>
    {/* The map title element needs to fit within 320px */}
    <span className='header-title-emphasis'>{props.match.params.mapSlug}</span>
  </div>
)

const TravelerProfileTitle = (props: { match: * }) => (
  <span className='header-title-emphasis'>@{props.match.params.username}</span>
)

const NoMatchTitle = () => <span className='header-title-emphasis'>DOH!</span>

class Title extends React.Component<{}> {
  render = () => (
    <div id='header-title'>
      <Switch>
        <Route exact path='/maps' component={MapSearchTitle} />
        <Route exact path='/travelers' component={TravelerSearchTitle} />
        <Route path='/travelers/:username' component={TravelerProfileTitle} />
        <Route path='/maps/:mapSlug' component={MapExplorerTitle} />
        <Route component={NoMatchTitle} />
      </Switch>
    </div>
  )
}

export default Title
