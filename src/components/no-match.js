// @flow
import * as React from 'react'

const NoMatch = (props: { location: * }) => (
  <div>No Match for: {props.location.pathname}</div>
)

export default NoMatch
