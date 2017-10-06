import React from 'react'
import {
  InputGroup,
  FormControl,
  Glyphicon,
  Button
} from 'react-bootstrap'

class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <InputGroup>
          <FormControl
            onChange={this.props.handleChange}
            value={this.props.searchPhrase}
            type="text"
          />
          <InputGroup.Button>
            <Button>
              <Glyphicon glyph="search"/> Search
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </form>
    )
  }
}

export default SearchForm