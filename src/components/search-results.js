// @flow
import * as React from 'react'

const SearchResults = (props: { tileComponent: React.ComponentType<*> }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gridGap: 20,
      justifyContent: 'space-evenly'
    }}
  >
    <props.tileComponent />
    <props.tileComponent />
    <props.tileComponent />
    <props.tileComponent />
    <props.tileComponent />
  </div>
)

export default SearchResults
