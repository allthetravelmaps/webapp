// @flow
import * as React from 'react'
import { Button, Input, InputGroup, InputGroupButton } from 'reactstrap'
import './index.css'

const Menu = () => (
  <div id='header-menu' className='bg-light'>
    <Button outline>&#x2630;</Button>
  </div>
)

const Search = () => (
  <div id='header-search'>
    <InputGroup size='sm'>
      <Input placeholder='Search 117 maps...' />
      <InputGroupButton outline>&#128269;</InputGroupButton>
    </InputGroup>
  </div>
)

const Title = () => (
  <div id='header-title'>
    <div className='header-title-linebreak'>
      <span className='header-title-emphasis'>You</span>
      <span> have explored </span>
      <span className='header-title-emphasis'>23.4%</span>
      <span> of&nbsp;</span>
    </div>
    <div className='header-title-linebreak'>
      <span className='header-title-emphasis'>Countries of the World</span>
    </div>
  </div>
)

const AuthControl = () => (
  <div id='header-auth-control'>
    <div className='bg-light'>
      <Button outline>Log in</Button>
    </div>
    <div className='bg-light'>
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
