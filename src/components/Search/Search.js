import React from 'react'

import SearchTable from './SearchTable'
import SingleView from "./SingleView";
import styles from './Search.css'
import latinize from 'latinize'


class Search extends React.Component {

  state = {
    searches: [],
    fetching: false,
    error: null,
    addMeal: JSON.parse(localStorage.getItem('addMeal')) || [],
  }

  componentDidMount() {
    this.setState({
      fetching: true
    })

    fetch(
        'https://jfddl2-tutim.firebaseio.com/recipes.json' // template string usage
    ).then(
      response => response.json()
    ).then(
      searches => {
        this.setState({ searches: searches.concat(this.state.addMeal), fetching: false })
      }
    ).catch(
      error => this.setState({ error, fetching: false })
    )
  }

  render() {
    const uid = this.props.match.params.uid || null
    let filteredProduct = this.state.searches.find((recipe)=>{
      return parseInt(uid) === parseInt(recipe.uid)
    })

    const { searches, error, fetching } = this.state

    return (
      <div>
        <h1
        style={{
          color: "white"
        }}
        >Wybierz posiłek</h1>

        {
          searches !== null ?
            null :
            <p>Brak posiłków do wyświetlenia</p>
        }

        {
          fetching === false ?
            null :
            <p>Pobieranie posiłków...</p>
        }

        {
          error === null ?
            null :
            <p>{error.message}</p>
        }
        {
          uid === null ?
            <SearchTable searches={searches} /> :
            <SingleView filteredProduct={filteredProduct}/>
        }


      </div>
    )
  }
}

export default Search