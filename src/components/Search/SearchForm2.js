import React from 'react'
import {Table, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'

import SearchForm from './SearchForm'


import {
  InputGroup,
  FormControl,
  Glyphicon,

  NavItem
} from 'react-bootstrap'


import {
  LinkContainer
} from 'react-router-bootstrap'


const filters = {
  meal_breakfast: search => search.category.includes('śniadanie'),
  meal_dinner: search => search.category.includes('obiad'),
  meal_supper: search => search.category.includes('kolacja')
}

const filterSearches = [
  [
    {
      label: 'Śniadanie',
      name: 'meal_breakfast'
    },
    {
      label: 'Obiad',
      name: 'meal_dinner'
    },
    {
      label: 'Kolacja',
      name: 'meal_supper'
    }
  ],

]


class SearchTable extends React.Component {

  state = {
    activeFilterNames: [],
    currentSearchPhrase: ''
  }

  handleSearchPhraseChange = event => {
    this.setState({
      currentSearchPhrase: event.target.value
    })
  }

  handleToggleFilterClick = event => {
    const filterName = event.target.dataset.filterName
    const {activeFilterNames} = this.state
    const filterNameExists = activeFilterNames.includes(filterName)

    this.setState({
      activeFilterNames:
        activeFilterNames.filter(
          activeFilterName => {
            const filterNamePrefix = filterName.split('_')[0]
            const activeFilterNamePrefix = activeFilterName.split('_')[0]

            return filterNamePrefix !== activeFilterNamePrefix
          }
        ).concat(filterNameExists ? [] : [filterName])
    })
  }

  handleResetClick = () => {
    this.setState({
      activeFilterNames: []
    })
  }

  render() {
    const {searches} = this.props
    return (
      <div>
        <SearchForm
          searchPhrase={this.state.currentSearchPhrase}
          handleChange={this.handleSearchPhraseChange}
        />

        <ButtonToolbar style={{marginTop: 20}}>
          {
            filterSearches.map(
              (search, index) => (
                <ButtonGroup key={index}>
                  {
                    search.map(
                      ({label, name}) => (
                        <Button
                          key={name}
                          data-filter-name={name}
                          onClick={this.handleToggleFilterClick}
                          active={this.state.activeFilterNames.includes(name)}
                        >
                          {label}
                        </Button>
                      )
                    )
                  }
                </ButtonGroup>
              )
            )
          }

          <ButtonGroup>
            <Button
              onClick={this.handleResetClick}
            >
              Pokaż wszystkie
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        <Table striped bordered condensed hover style={{
          marginTop: 20
        }}>
          <thead>
          <tr>
            <th>Nazwa posiłku</th>
            <th>Wartość kaloryczna</th>
            <th>Rodzaj posiłku</th>
            <th>Dodaj do ulubionych</th>
          </tr>
          </thead>
          <tbody>
          {
            searches && searches.filter(
              search => this.state.activeFilterNames.map(
                activeFilterName => filters[activeFilterName]
              ).every(
                f => f(search)
              )
            ).filter(
              search => search.name.includes(this.state.currentSearchPhrase)
            ).map(
              ({uid, name, kcal, category, favourite}, index, allSearches) => (
                <tr key={uid}>
                  <td>
                    {name}
                  </td>
                  <td>
                    {kcal}
                  </td>
                  <td>
                    {category}

                  </td>
                  <td>
                    {favourite}
                    <form>
                      <InputGroup>
                        <InputGroup.Button>
                          <Button>
                            <LinkContainer to="/favouritelist">
                              <NavItem>Dodaj</NavItem>
                            </LinkContainer>
                          </Button>
                        </InputGroup.Button>
                      </InputGroup>
                    </form>
                  </td>

                </tr>
              )
            )
          }
          </tbody>

        </Table>
      </div>
    )
  }
}



class SearchForm extends React.Component {
  state = {
    favouriteAdded: false,
    isNewFavouriteAdded: true,

  }

  handleSubmitMain = event => {
    event.preventDefault()

    let newFavourite = {
      uid: Date.now(), // @TODO can be improved
    }

    let isNewFavouriteValid = true

    for(let variable in newFavourite) {
      if(!newFavourite[variable]) {
        isNewFavouriteValid = false;
        break
      }
    }

    this.setState({
      isNewFavouriteAdded: isNewFavouriteValid,
    })

    if (isNewFavouriteValid) {
      // obiekt do storage
      // alert (settimeout)
      //

      this.props.addFavourite(newFavourite)

      this.setState({
        favouriteAdded: true,
      }, () => {
        setTimeout(() => {
          this.setState({
            faveouriteAdded: false
          })
        }, 2000)
      })
    }

  }


  render() {
    const favouriteAdded = <Alert bsStyle="succcess">
      Dodano do ulubionych
    </Alert>;

    return (
      <div>
        <Grid>
          <Row>
            <FormGroup controlId="newId">
            </FormGroup>
          </Row>
        </Grid>

        <Button onClick={this.handleSubmitMain}>Dodaj do ulubionych</Button>

      </div>

    )
  }
}


export default SearchTable




