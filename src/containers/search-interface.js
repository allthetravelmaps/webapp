// @flow
import * as React from 'react'
import SearchBar from './search-bar'
import SearchResults from '../components/search-results.js'
import MapTile from '../components/map-tile.js'
import TravelerTile from '../components/traveler-tile.js'

type SearchInterfaceProps = {
  itemType: string,
  sortOpts: string[],
  tileComponent: React.ComponentType<*>,
  resultSlugs: string[]
}

const SearchInterface = (props: SearchInterfaceProps) => (
  <div>
    <SearchBar itemType={props.itemType} sortOpts={props.sortOpts} />
    <SearchResults
      tileComponent={props.tileComponent}
      resultSlugs={props.resultSlugs}
    />
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
    resultSlugs={[
      'countries-of-the-world',
      'states-of-the-usa',
      'countries-of-the-eu',
      'provinces-of-canada',
      'provinces-of-argentina',
      'counties-of-california',
      'comunas-of-buenos-aires',
      'neighborhoods-of-buenos-aires'
    ]}
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
    resultSlugs={['brithopkins', 'mfogel', 'grant-the-dog']}
  />
)

export { MapSearchInterface, TravelerSearchInterface }
