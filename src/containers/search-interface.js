// @flow
import * as React from 'react'
import SearchBar from '../components/search-bar.js'
import SearchResults from '../components/search-results.js'
import MapTile from '../components/map-tile.js'
import TravelerTile from '../components/traveler-tile.js'
import './search-interface.css'

type SearchInterfaceProps = {
  itemType: string,
  sortOpts: string[],
  tileComponent: React.ComponentType<*>
}

const SearchInterface = (props: SearchInterfaceProps) => (
  <div
    id='search-interface'
    style={{ padding: '10px 60px 0', flex: '1 1 auto' }}
  >
    <SearchBar itemType={props.itemType} sortOpts={props.sortOpts} />
    <SearchResults tileComponent={props.tileComponent} />
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
    tileComponent={MapTile}
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
    tileComponent={TravelerTile}
  />
)

export { MapSearchInterface, TravelerSearchInterface }
