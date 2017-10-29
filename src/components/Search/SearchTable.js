import React from 'react'
import {
  Table,
  ButtonToolbar,
  ButtonGroup,
  Button,
  Alert,
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap'
import latinize from 'latinize'
import SearchForm from './SearchForm'
import {Link} from 'react-router-dom'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import Modal from 'react-modal';
import styles from './SearchTable.css'

import {connect} from 'react-redux'
import {addMealToPlan} from '../../state/planer'

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
    mealAdded: null,
    timeAdded: 0,
    dayAdded: 0,
    activeFilterNames: [],
    modalIsOpen: false,
    planerModalShow: false,
    favourites: JSON.parse(localStorage.getItem('favourites')) || [],
    currentSearchPhrase: '',
    addFavourite: null,
    value: {
      min: 100, //this.props.searches.reduce((min, next) => Math.min(min, next.kcal), Infinity),
      max: 500, //this.props.searches.reduce((max, next) => Math.max(max, next.kcal), -Infinity)
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

  openModal = (mealUid) => {
    this.setState({
      modalIsOpen: true,
      mealAdded: mealUid
    });
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      mealAdded: null
    });
  }

  addMealHandler = () => {
    this.closeModal()

    const newMeal = {
      day: this.state.dayAdded,
      meal: this.state.timeAdded,
      uid: this.state.mealAdded
    }

    console.log(newMeal)

    this.props.addMealToPlan(newMeal)
  }

  handleDayChange = (event) => {
    this.setState({
      dayAdded: parseInt(event.target.value)
    })
  }

  handleTimeChange = (event) => {
    this.setState({
      timeAdded: parseInt(event.target.value)
    })
  }

  render() {

      const modalStyles = {
          content: {
              borderColor: 'rgb(208, 255, 0)',
              borderStyle: 'solid',
              backgroundColor: 'black',
          }
      }


    const customStyles = {
      content: {
        width: '38%',
          height: '50%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',


      }


    };


    const {searches} = this.props


    return (


      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Dodaj</h2>
          <form>

            <FormGroup controlId="formControlsSelect" >
              <ControlLabel>Dzień tygodnia</ControlLabel>
              <FormControl className="formInput"
                           onChange={this.handleDayChange} componentClass="select" placeholder="select"

              >
                <option value="0">Poniedziałek</option>
                <option value="1">Wtorek</option>
                <option value="2">Środa</option>
                <option value="3">Czwartek</option>
                <option value="4">Piątek</option>
                <option value="5">Sobota</option>
                <option value="6">Niedziela</option>
              </FormControl>
              <ControlLabel>Pora dnia</ControlLabel>
              <FormControl onChange={this.handleTimeChange} componentClass="select" placeholder="select">
                <option value="0">śniadanie</option>
                <option value="1">obiad</option>
                <option value="2">kolacja</option>
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelectMultiple">

            </FormGroup>
          </form>

          <button className="acceptButton" onClick={this.addMealHandler} >Zatwierdź</button>

        </Modal>

        <SearchForm
          searchPhrase={this.state.currentSearchPhrase}
          handleChange={this.handleSearchPhraseChange}
        />

        {

          this.state.addFavourite === null ? null :
            <div><Alert bsStyle="success">Dodano do Twojego dnia! </Alert></div>


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
              minValue={100}
              maxValue={500}
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
            <th>Dodaj do swojego dnia</th>
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

                    <Button onClick={() => this.openModal(parseInt(uid))}>
                      Dodaj do Planera
                    </Button>
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




const mapDispatchToProps = (dispatch) => ({
  addMealToPlan: (newMeal) => dispatch(addMealToPlan(newMeal))
})




export default connect(
  null,
  mapDispatchToProps
)(SearchTable)