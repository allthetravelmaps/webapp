// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Menu = () => (
  <div className='header-menu'>
    <Link to='/'>ATTM / Maps</Link>
  </div>
)

const Title = () => (
  <div className='header-title'>
    You have explored 0% of Countries of the World
  </div>
)

const ChangeMapButton = () => (
  <Link to='/maps'>
    <div className='header-change-map-button'>Change Map</div>
  </Link>
)

const AuthControl = () => (
  <div className='header-auth-control'>Log in or Sign up</div>
)

const Header = (props: {}) => (
  <header className='header'>
    <div>
      <Menu />
    </div>
    <div>
      <Title />
    </div>
    <div>
      <ChangeMapButton />
      <AuthControl />
    </div>
  </header>
)

export default Header
