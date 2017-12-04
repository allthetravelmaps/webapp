// @flow
import React from 'react'
import './index.css'

const MapTile = () => <div className='main-map-tile'>Map Tile</div>

const MapChooser = () => (
  <div className='main-map-chooser'>
    <MapTile />
    <MapTile />
    <MapTile />
    <MapTile />
    <MapTile />
  </div>
)

export default MapChooser
