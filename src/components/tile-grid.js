// @flow
import * as React from 'react'

const TileGrid = (props: { children: * }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 300px)',
      gridGap: 20,
      justifyContent: 'space-evenly',
      margin: 10
    }}
  >
    {props.children}
  </div>
)

export default TileGrid
