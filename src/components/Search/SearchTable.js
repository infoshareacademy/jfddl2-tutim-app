import React from 'react'
import {Table, ButtonToolbar, ButtonGroup, Button} from 'react-bootstrap'
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
              ({uid, name, kcal, category}, index, allSearches) => (

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