// @flow
import React from 'react'

const MapExplorer = (props: { match: any }) => (
  <div className='main main-map-explorer'>
    Map Explorer: {props.match.params.mapSlug}
  </div>
)

export default MapExplorer
