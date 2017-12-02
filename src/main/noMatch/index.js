// @flow
import React from 'react'

const NoMatch = (props: { location: any }) => (
  <div className='main main-no-match'>
    No Match for: {props.location.pathname}
  </div>
)

export default NoMatch
