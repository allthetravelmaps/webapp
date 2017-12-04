// @flow
import React from 'react'
import SearchBar from '../components/searchBar.js'
import TileGrid from '../components/tileGrid.js'
import MapTile from '../components/mapTile.js'

const MapChooser = () => (
  <div>
    <SearchBar itemType='map' />
    <TileGrid>
      <MapTile />
      <MapTile />
      <MapTile />
      <MapTile />
      <MapTile />
    </TileGrid>
  </div>
)

export default MapChooser
