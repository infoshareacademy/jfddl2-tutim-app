import React from 'react'

import SearchTable from './SearchTable'
import SingleView from "./SingleView";
import styles from './Search.css'
import latinize from 'latinize'

import {database} from '../../firebase'

class Search extends React.Component {

  state = {
    searches: [],
    fetching: false,
    error: null
  }

  componentDidMount() {
    this.setState({
      fetching: true
    })

    database().ref('recipes').on('value', snapshot => {
      let searches = snapshot.val()
      console.log('searches', searches)
      this.setState({searches: searches, fetching: false})
    })

  }

  render() {
    const uid = this.props.match.params.uid || null
    let filteredProduct = this.state.searches.find((recipe) => {
      return parseInt(uid) === parseInt(recipe.uid)
    })

    const {searches, error, fetching} = this.state

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
            <SearchTable searches={searches}/> :
            <SingleView filteredProduct={filteredProduct}/>
        }


      </div>
    )
  }
}

export default Search