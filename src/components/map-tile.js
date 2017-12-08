// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'

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
    <Link to={`/maps/${props.slug}`}>{props.slug}</Link>
  </div>
)

export default MapTile
