// @flow
import React from 'react'

const TravelerProfile = (props: { match: any }) => (
  <div>
    Traveler Profile: {props.match.params.username}
  </div>
)

export default TravelerProfile
