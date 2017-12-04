// @flow
import React from 'react'
import SearchBar from '../components/search-bar.js'
import TileGrid from '../components/tile-grid.js'
import TravelerTile from '../components/traveler-tile.js'

const TravelerDirectory = () => (
  <div>
    <SearchBar
      itemType='traveler'
      sortOpts={[
        'most traveled first',
        'least traveled first',
        'newest first',
        'oldest first'
      ]}
    />
    <TileGrid>
      <TravelerTile />
      <TravelerTile />
      <TravelerTile />
      <TravelerTile />
      <TravelerTile />
    </TileGrid>
  </div>
)

export default TravelerDirectory
