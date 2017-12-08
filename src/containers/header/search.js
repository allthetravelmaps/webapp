// @flow
import * as React from 'react'
import { matchPath, withRouter } from 'react-router'
import { Button, Form, Input, InputGroup, InputGroupButton } from 'reactstrap'

type PropsType = {
  history: { push: string => mixed },
  location: { pathname: string }
}

class Search extends React.Component<PropsType> {
  input: ?HTMLInputElement

  handleSubmit = (evt: SyntheticEvent<HTMLElement>) => {
    evt.preventDefault()
    const query = this.input && this.input.value ? `?q=${this.input.value}` : ''
    this.props.history.push(`/maps${query}`)
  }

  componentDidUpdate = () => {
    /* if we're not on the search results page, clear the search query */
    const isOnMapsSearch = matchPath(this.props.location.pathname, {
      path: '/maps',
      exact: true
    })
    if (!isOnMapsSearch && this.input) this.input.value = ''
  }

  render = () => (
    <Form id='header-search' onSubmit={this.handleSubmit}>
      <InputGroup size='sm'>
        <Input
          innerRef={x => (this.input = x)}
          placeholder='Search 117 maps...'
        />
        <InputGroupButton>
          <Button outline className='header-button-keep-border'>
            <span role='img' aria-label='search'>
              &#x1F50D;
            </span>
          </Button>
        </InputGroupButton>
      </InputGroup>
    </Form>
  )
}

export default withRouter(Search)
