// @flow
import React from 'react'
import './index.css'
import { Button } from 'reactstrap'

const Main = (props: { fbapp: any, sdkVersion: string }) => (
  <div>
    <h4>
      Firebase SDK Version: <i>{props.sdkVersion}</i>
    </h4>
    <h4>
      Firebase Initialized App <i>{props.fbapp.name}</i> with config:
    </h4>
    <div className='container-fluid'>
      <div className='row'>
        <div className='cell'>
          <Button>Test, test</Button>
        </div>
        {Object.keys(props.fbapp.options).map(key => (
          <div key={key} className='cell'>
            {key}: {props.fbapp.options[key]}
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default Main
