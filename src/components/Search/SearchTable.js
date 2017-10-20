import React from 'react'
import {Table, ButtonToolbar, ButtonGroup, Button, Alert, Row, Col} from 'react-bootstrap'
import latinize from 'latinize'
import SearchForm from './SearchForm'
import {Link} from 'react-router-dom'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

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
    favourites: JSON.parse(localStorage.getItem('favourites')) || [],
    currentSearchPhrase: '',
    addFavourite: null,
    value: {
      // min: 100, //this.props.searches.reduce((min, next) => Math.min(min, next.kcal), Infinity),
      // max: 500, //this.props.searches.reduce((max, next) => Math.max(max, next.kcal), -Infinity)
    }
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
      activeFilterNames: [],
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

          this.state.addFavourite === null ? null :
            <div><Alert bsStyle="success">Dodano do ulubionych </Alert></div>


        }
        <Row>
          <Col sm={4}>
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
                              style={{
                                background: "#933EC4",
                                color: "#FFFFFF",
                                textShadow: "none"
                              }}

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
                  style={{
                    background: "#933EC4",
                    color: "#FFFFFF",
                    textShadow: "none"
                  }}

                >
                  Pokaż wszystkie
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>


          <Col sm={4}>
            <InputRange
              minValue={searches.reduce((min, next) => Math.min(min, next.kcal), Infinity)}
              maxValue={searches.reduce((max, next) => Math.max(max, next.kcal), -Infinity)}
              value={this.state.value}
              onChange={value => this.setState({value})}/>
          </Col>
        </Row>


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
            ).filter(
              item => item.kcal > this.state.value.min && item.kcal < this.state.value.max
            ).map(
              ({uid, name, kcal, category, favourite}, index, allSearches) => (


                <tr key={uid}>
                  <td>
                    <Link to={'/search/' + uid}>{name} </Link>
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
                      this.addToFavourites(uid)
                    }}
                            style={{
                              background: '#adc43e',
                              color: "#FFFFFF",
                              textShadow: "none"
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