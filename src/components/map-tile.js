// @flow
import * as React from 'react'

const MapTile = (props: { slug: string }) => (
  <div
    style={{
      border: '1px solid black',
      padding: 50,
      height: 300,
      textAlign: 'center',
      minWidth: 300
    }}
  >
    Map Tile<br />
    <br />
    {props.slug}
  </div>
)

export default MapTile
