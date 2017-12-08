// @flow
import * as React from 'react'
import AuthControl from './auth-control.js'
import Menu from './menu.js'
import Search from './search.js'
import './index.css'

const Title = () => (
  <div id='header-title'>
    <span className='header-title-emphasis'>You</span>
    <span>&nbsp;have explored&nbsp;</span>
    <span className='header-title-emphasis'>23.4%</span>
    <span>&nbsp;of&nbsp;</span>
    {/* The map title element needs to fit within 320px */}
    <span className='header-title-emphasis'>Neighborhoods of Buenos Aires</span>
  </div>
)

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
