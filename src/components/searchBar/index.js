// @flow
import React from 'react'
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupButton,
  Label
} from 'reactstrap'

const SearchBar = (props: { itemType: string }) => (
  <Form
    inline
    style={{
      justifyContent: 'space-between',
      margin: '25px 10px 20px'
    }}
  >
    <FormGroup style={{ marginRight: 10, flexGrow: 1 }}>
      <InputGroup style={{ flexGrow: 1 }}>
        <Input placeholder={`Search ${props.itemType}s...`} />
        <InputGroupButton style={{ fontVariant: 'small-caps' }}>
          search
        </InputGroupButton>
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <Label style={{ paddingRight: '1ch' }}>
        Showing 92 {props.itemType}s
      </Label>
      <Input type='select'>
        <option>most popular first</option>
        <option>least popular first</option>
        <option>newest first</option>
        <option>oldest first</option>
      </Input>
    </FormGroup>
  </Form>
)

export default SearchBar
