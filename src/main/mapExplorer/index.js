// @flow
import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import './index.css'

/* inspiration from https://github.com/alex3165/react-mapbox-gl/blob/master/src/map.tsx */

class MapExplorer extends React.Component<{ match: any }, {}> {
  container: ?HTMLDivElement

  componentDidMount () {
    const map = new mapboxgl.Map({
      container: this.container,
      style: 'https://openmaptiles.github.io/positron-gl-style/style-cdn.json'
    })
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right')
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right')
    map.addControl(new mapboxgl.GeolocateControl({}), 'top-left')
    map.addControl(new mapboxgl.ScaleControl({}), 'bottom-left')
  }

  render () {
    return (
      <div
        className='main-map-explorer'
        ref={x => {
          this.container = x
        }}
      />
    )
  }
}

export default MapExplorer
