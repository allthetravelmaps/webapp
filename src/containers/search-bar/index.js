// @flow
import * as React from 'react'
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupButton,
  Label
} from 'reactstrap'
import './index.css'

const SearchBar = (props: { itemType: string, sortOpts: string[] }) => (
  <Form inline id='search-bar'>
    <FormGroup id='search-bar-left'>
      <InputGroup style={{ flexGrow: 1 }}>
        <Input placeholder={`Search ${props.itemType}s...`} />
        <InputGroupButton style={{ fontVariant: 'small-caps' }}>
          search
        </InputGroupButton>
      </InputGroup>
    </FormGroup>
    <FormGroup id='search-bar-right'>
      <Label style={{ marginRight: '1ch' }}>92 {props.itemType}s</Label>
      <Input type='select'>
        <option>{props.sortOpts[0]}</option>
        <option>{props.sortOpts[1]}</option>
        <option>{props.sortOpts[2]}</option>
        <option>{props.sortOpts[3]}</option>
      </Input>
    </FormGroup>
  </Form>
)

export default SearchBar
