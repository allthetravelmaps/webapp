// @flow
import * as React from 'react'
import SearchBar from '../components/search-bar.js'
import SearchResults from '../components/search-results.js'
import MapTile from '../components/map-tile.js'
import TravelerTile from '../components/traveler-tile.js'

type SearchInterfaceProps = {
  itemType: string,
  sortOpts: string[],
  tileComponent: React.ComponentType<*>
}

const SearchInterface = (props: SearchInterfaceProps) => (
  <div>
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
