// @flow
import * as React from 'react'
import { Button, Input, InputGroup, InputGroupButton } from 'reactstrap'
import Menu from './menu.js'
import './index.css'

const Search = () => (
  <div id='header-search'>
    <InputGroup size='sm'>
      <Input placeholder='Search 117 maps...' />
      <InputGroupButton outline className='header-button-keep-border'>
        &#128269;
      </InputGroupButton>
    </InputGroup>
  </div>
)

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

const AuthControl = () => (
  <div id='header-auth-control'>
    <div
      id='header-auth-control-profile-button-wrapper'
      className='bg-light header-button-wrapper'
    >
      <Button outline>&#128100;</Button>
    </div>
    <div
      id='header-auth-control-login-button-wrapper'
      className='bg-light header-button-wrapper'
    >
      <Button outline>Log in</Button>
    </div>
    <div
      id='header-auth-control-signup-button-wrapper'
      className='bg-light header-button-wrapper'
    >
      <Button outline>Sign up</Button>
    </div>
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
