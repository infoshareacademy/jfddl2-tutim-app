import React from 'react'
import { Table, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'

import SearchForm from './SearchForm'

const filters = {
  city_gdynia: search => search.city === 'Gdynia',
  city_gdansk: search => search.city === 'Gdańsk',
  city_sopot: search => search.city === 'Sopot',
  level_beginner: search => search.level === 'beginner',
  level_intermediate: search => search.level === 'intermediate',
  level_advanced: search => search.level === 'advanced'
}

const filterSearches = [
  [
    {
      label: 'Gdynia',
      name: 'city_gdynia'
    },
    {
      label: 'Sopot',
      name: 'city_sopot'
    },
    {
      label: 'Gdańsk',
      name: 'city_gdansk'
    }
  ],

  [
    {
      label: 'Beginner',
      name: 'level_beginner'
    },
    {
      label: 'Intermediate',
      name: 'level_intermediate'
    },
    {
      label: 'Advanced',
      name: 'level_advanced'
    }
  ]
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
    const { activeFilterNames } = this.state
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
    const { searches } = this.props

    return (
      <div>
        <SearchForm
          searchPhrase={this.state.currentSearchPhrase}
          handleChange={this.handleSearchPhraseChange }
        />
        debugger
        <ButtonToolbar style={{ marginTop: 20 }}>
          {
            filterSearches.map(
              (search, index) => (
                <ButtonGroup key={index}>
                  {
                    search.map(
                      ({ label, name }) => (
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
              RESET
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        <Table striped bordered condensed hover style={{
          marginTop: 20
        }}>
          <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Level</th>
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
              ({ id, name, city, level }, index, allSearches) => (
                <tr key={id}>
                  <td>
                    {name}
                  </td>
                  <td>
                    {city}
                  </td>
                  <td>
                    {level}
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