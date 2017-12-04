// @flow
import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <div>
    <Link to='/'>ATTM / Maps</Link>
  </div>
)

const Title = () => <div>You have explored 0% of Countries of the World</div>

const ChangeMapButton = () => (
  <Link to='/maps'>
    <div
      style={{
        display: 'inline-block',
        marginRight: 10
      }}
    >
      Change Map
    </div>
  </Link>
)

const AuthControl = () => (
  <div style={{ display: 'inline-block' }}>Log in or Sign up</div>
)

const Header = (props: {}) => (
  <header
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '2px solid black'
    }}
  >
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
