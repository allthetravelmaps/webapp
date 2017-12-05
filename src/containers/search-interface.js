// @flow
import * as React from 'react'
import SearchBar from '../components/search-bar.js'
import TileGrid from '../components/tile-grid.js'
import MapTile from '../components/map-tile.js'
import TravelerTile from '../components/traveler-tile.js'

type SearchInterfaceProps = {
  itemType: string,
  sortOpts: string[],
  TileComponent: React.ComponentType<*>
}

const SearchInterface = (props: SearchInterfaceProps) => (
  <div>
    <SearchBar itemType={props.itemType} sortOpts={props.sortOpts} />
    <TileGrid>
      <props.TileComponent />
      <props.TileComponent />
      <props.TileComponent />
      <props.TileComponent />
      <props.TileComponent />
    </TileGrid>
  </div>
)

const MapSearchInterface = () => (
  <SearchInterface
    itemType='map'
    sortOpts={[
      'most popular first',
      'least popular first',
      'newest first',
      'oldest first'
    ]}
    TileComponent={MapTile}
  />
)

const TravelerSearchInterface = () => (
  <SearchInterface
    itemType='traveler'
    sortOpts={[
      'most traveled first',
      'least traveled first',
      'newest first',
      'oldest first'
    ]}
    TileComponent={TravelerTile}
  />
)

export { MapSearchInterface, TravelerSearchInterface }
