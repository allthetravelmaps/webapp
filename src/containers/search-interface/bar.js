// @flow
import * as React from 'react'
import { withRouter } from 'react-router'
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupButton,
  Label
} from 'reactstrap'
import QueryString from 'query-string'

type PropsType = {
  itemType: string,
  sortOpts: string[],
  history: { push: string => mixed },
  location: { search: string }
}

class SearchBar extends React.Component<PropsType> {
  input: ?HTMLInputElement

  handleSubmit = (evt: SyntheticEvent<HTMLElement>) => {
    evt.preventDefault()
    const query = this.input && this.input.value ? `?q=${this.input.value}` : ''
    this.props.history.push(`/maps${query}`)
  }

  componentDidUpdate = () => {
    const parsedQS = QueryString.parse(this.props.location.search)
    if (this.input && 'q' in parsedQS) this.input.value = parsedQS['q']
  }

  render = () => (
    <Form inline id='search-bar' onSubmit={this.handleSubmit}>
      <FormGroup id='search-bar-left'>
        <InputGroup style={{ flexGrow: 1 }}>
          <Input
            placeholder={`Search ${this.props.itemType}s...`}
            innerRef={x => (this.input = x)}
          />
          <InputGroupButton style={{ fontVariant: 'small-caps' }}>
            search
          </InputGroupButton>
        </InputGroup>
      </FormGroup>
      <FormGroup id='search-bar-right'>
        <Label style={{ marginRight: '1ch' }}>92 {this.props.itemType}s</Label>
        <Input type='select'>
          <option>{this.props.sortOpts[0]}</option>
          <option>{this.props.sortOpts[1]}</option>
          <option>{this.props.sortOpts[2]}</option>
          <option>{this.props.sortOpts[3]}</option>
        </Input>
      </FormGroup>
    </Form>
  )
}

export default withRouter(SearchBar)
