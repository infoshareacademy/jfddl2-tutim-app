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
            <Button className="searchBttn"
            style={{
                background: 'rgb(148, 0, 233)',
                color: 'white',
                border: 'none',
                fontFamily: 'Montserrat Alternates',

            }}>
              <Glyphicon glyph="search"/> Szukaj
            </Button>
          </InputGroup.Button>
        </InputGroup>
      </form>
    )
  }




}

export default SearchForm