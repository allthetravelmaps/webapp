// @flow
import * as React from 'react'
import onClickOutside from 'react-onclickoutside'
import { Button } from 'reactstrap'

type EventHandlerType = (SyntheticEvent<HTMLButtonElement>) => void

const LoginBox = (props: { handleSignupLinkClick: EventHandlerType }) => (
  <div>
    <div className='auth-control-box-title'>Log in to All the Travel Maps</div>
    <div className='auth-control-box-subtitle'>
      <span>Don't have an account?</span>
      <Button onClick={props.handleSignupLinkClick}>Sign up</Button>
    </div>
  </div>
)

const SignupBox = (props: { handleLoginLinkClick: EventHandlerType }) => (
  <div>
    <div className='auth-control-box-title'>
      Sign up for All the Travel Maps
    </div>
    <div className='auth-control-box-subtitle'>
      <span>Already have an account?</span>
      <Button onClick={props.handleLoginLinkClick}>Log in</Button>
    </div>
  </div>
)

type StateType = {
  openModal: null | 'login' | 'signup'
}

class AuthControl extends React.Component<*, StateType> {
  state = { openModal: null }

  handleProfileButtonClick = (evt: SyntheticEvent<HTMLButtonElement>) => {
    if (this.openModal) this.setState({ openModal: null })
    else this.setState({ openModal: 'login' }) // TODO: be smarter about the default
  }

  handleLoginButtonClick = (evt: SyntheticEvent<HTMLElement>) => {
    this.setState({ openModal: 'login' })
  }

  handleSignupButtonClick = (evt: SyntheticEvent<HTMLElement>) => {
    this.setState({ openModal: 'signup' })
  }

  handleClickOutside = (evt: SyntheticEvent<HTMLElement>) => {
    this.setState({ openModal: null })
  }

  render = () => (
    <div id='header-auth-control'>
      <div
        id='header-auth-control-profile-button-wrapper'
        className='bg-light header-button-wrapper'
      >
        <Button outline onClick={this.handleProfileButtonClick}>
          <span role='img' aria-label='log in or sign up'>
            &#x1F464;
          </span>
        </Button>
      </div>
      <div
        id='header-auth-control-login-button-wrapper'
        className='bg-light header-button-wrapper'
      >
        <Button outline onClick={this.handleLoginButtonClick}>
          Log in
        </Button>
      </div>
      <div
        id='header-auth-control-signup-button-wrapper'
        className='bg-light header-button-wrapper'
      >
        <Button outline onClick={this.handleSignupButtonClick}>
          Sign up
        </Button>
      </div>
      <div
        className='header-dropdown-box'
        style={{
          display: this.state.openModal === 'login' ? 'block' : 'none'
        }}
      >
        <LoginBox handleSignupLinkClick={this.handleSignupButtonClick} />
      </div>
      <div
        className='header-dropdown-box'
        style={{
          display: this.state.openModal === 'signup' ? 'block' : 'none'
        }}
      >
        <SignupBox handleLoginLinkClick={this.handleLoginButtonClick} />
      </div>
    </div>
  )
}

export default onClickOutside(AuthControl)
