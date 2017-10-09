import React from 'react'

import {
  InputGroup,
  FormControl,
  Glyphicon,
  Button
} from 'react-bootstrap'

class FavouriteForm extends React.Component {
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
                <Glyphicon glyph="search"/>
                Poszukaj se
              </Button>
        </InputGroup.Button>
          </InputGroup>
      </form>
    )
  }
}

export default FavouriteForm