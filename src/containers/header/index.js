// @flow
import * as React from 'react'
import AuthControl from './auth-control.js'
import Menu from './menu.js'
import Search from './search.js'
import Title from './title.js'
import './index.css'

const Header = (props: {}) => (
  <header id='header'>
    <div style={{ display: 'flex' }}>
      <Menu />
      <Search />
    </div>
    <div style={{ alignSelf: 'center' }}>
      <Title />
    </div>
    <div>
      <AuthControl />
    </div>
  </header>
)

export default Header
