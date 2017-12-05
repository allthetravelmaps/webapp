// @flow
import * as React from 'react'

const TravelerProfile = (props: { match: * }) => (
  <div>Traveler Profile: {props.match.params.username}</div>
)

export default TravelerProfile
