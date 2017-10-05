import React from 'react'
import { Table, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'

import GroupSearchForm from './GroupSearchForm'

const filters = {
  city_gdynia: group => group.city === 'Gdynia',
  city_gdansk: group => group.city === 'Gdańsk',
  city_sopot: group => group.city === 'Sopot',
  level_beginner: group => group.level === 'beginner',
  level_intermediate: group => group.level === 'intermediate',
  level_advanced: group => group.level === 'advanced'
}

const filterGroups = [
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


class GroupTable extends React.Component {

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
    const { groups } = this.props

    return (
      <div>
        <GroupSearchForm
          searchPhrase={this.state.currentSearchPhrase}
          handleChange={this.handleSearchPhraseChange }
        />

        <ButtonToolbar style={{ marginTop: 20 }}>
          {
            filterGroups.map(
              (group, index) => (
                <ButtonGroup key={index}>
                  {
                    group.map(
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
            groups && groups.filter(
              group => this.state.activeFilterNames.map(
                activeFilterName => filters[activeFilterName]
              ).every(
                f => f(group)
              )
            ).filter(
              group => group.name.includes(this.state.currentSearchPhrase)
            ).map(
              ({ id, name, city, level }, index, allGroups) => (
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

export default GroupTable