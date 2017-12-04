// @flow
import React from 'react'
import SearchBar from '../../components/searchBar'
import TileGrid from '../../components/tileGrid'
import MapTile from '../../components/mapTile'

const MapChooser = () => (
  <div className='map-chooser'>
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
