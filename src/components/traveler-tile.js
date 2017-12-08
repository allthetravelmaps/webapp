// @flow
import * as React from 'react'
import { Link } from 'react-router-dom'

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
    <Link to={`/travelers/${props.slug}`}>{props.slug}</Link>
  </div>
)

export default TravelerTile
