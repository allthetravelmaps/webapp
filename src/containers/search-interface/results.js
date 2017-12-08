// @flow
import * as React from 'react'

const SearchResults = (props: {
  tileComponent: React.ComponentType<*>,
  resultSlugs: string[]
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gridGap: 20,
      justifyContent: 'space-evenly'
    }}
  >
    {props.resultSlugs.map(slug => (
      <props.tileComponent slug={slug} key={slug} />
    ))}
  </div>
)

export default SearchResults
