// @flow
import * as React from 'react'
import onClickOutside from 'react-onclickoutside'
import { Button, Nav, NavItem, NavLink } from 'reactstrap'
import './index.css'

const MenuItems = () => (
  <Nav vertical>
    <NavItem>
      <NavLink href='/maps'>Choose a Map</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href='/travelers'>Traveler Directory</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href='/profile'>Your Profile</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href='/blog'>Blog - what's new?</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href='/help'>Help & FAQ</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href='/feedback'>Report a bug, suggest a feature</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href='/about'>About All the Travel Maps</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href='/legal'>Privacy Policy & TOS</NavLink>
    </NavItem>
  </Nav>
)

class Menu extends React.Component<*, { isOpen: boolean }> {
  state = { isOpen: false }

  handleClick = (evt: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleClickOutside = (evt: SyntheticEvent<HTMLElement>) => {
    this.setState({ isOpen: false })
  }

  render = () => (
    <div id='header-menu'>
      <div className='bg-light header-button-wrapper'>
        <Button outline onClick={this.handleClick}>
          &#x2630;
        </Button>
      </div>
      <div
        className='header-dropdown-box'
        style={{ display: this.state.isOpen ? 'block' : 'none' }}
      >
        <MenuItems />
      </div>
    </div>
  )
}

export default onClickOutside(Menu)
