import React from 'react'
import {Table, ButtonToolbar, ButtonGroup, Button,Alert} from 'react-bootstrap'
import latinize from 'latinize'
import SearchForm from './SearchForm'

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

  addToFavourites = (id) => {
    this.setState({
      favourites: this.state.favourites.concat(id),
      addFavourite: id
    }, () => {
      localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
    });


  }

  render() {
    const {searches} = this.props


    return (


      <div>
        <SearchForm
          searchPhrase={this.state.currentSearchPhrase}
          handleChange={this.handleSearchPhraseChange}
        />

        {

          this.state.addFavourite === null ? null : <div><Alert bsStyle="success">Dodano do ulubionych </Alert></div>


        }

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
                search =>
    latinize(search.name.toLowerCase()).includes(
        latinize(this.state.currentSearchPhrase.toLowerCase())
    )
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
                    <Button onClick={() => {
                      this.addToFavourites(index)
                    }}>Dodaj do ulubionych</Button>
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

export default SearchTable