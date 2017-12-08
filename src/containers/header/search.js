// @flow
import * as React from 'react'
import { withRouter } from 'react-router'
import { Button, Form, Input, InputGroup, InputGroupButton } from 'reactstrap'

class Search extends React.Component<*> {
  input: ?HTMLInputElement

  handleSubmit = (evt: SyntheticEvent<HTMLElement>) => {
    evt.preventDefault()
    const query = this.input && this.input.value ? `?s=${this.input.value}` : ''
    this.props.history.push(`/maps${query}`)
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
