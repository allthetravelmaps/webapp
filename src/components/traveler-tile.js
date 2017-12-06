// @flow
import * as React from 'react'

const TravelerTile = (props: { slug: string }) => (
  <div
    style={{
      border: '1px solid black',
      padding: 50,
      height: 300,
      textAlign: 'center'
    }}
  >
    Traveler Tile<br />
    <br />
    {props.slug}
  </div>
)

export default TravelerTile
