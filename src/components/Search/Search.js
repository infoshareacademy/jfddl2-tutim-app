import React from 'react'

import SearchTable from './SearchTable'
import SingleView from "./SingleView";

class Search extends React.Component {

  state = {
    searches: null,
    fetching: false,
    error: null
  }

  componentDidMount() {
    this.setState({
      fetching: true
    })

    fetch(
      `${process.env.PUBLIC_URL} /data/database.json` // template string usage
    ).then(
      response => response.json()
    ).then(
      searches => {
        this.setState({ searches, fetching: false })
      }
    ).catch(
      error => this.setState({ error, fetching: false })
    )
  }

  render() {
    const uid = this.props.match.params.uid || null
    console.log(uid)
    const { searches, error, fetching } = this.state

    return (
      <div>
        <h1>Wybierz posiłek</h1>

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
            <SingleView uid={uid}/>
        }


      </div>
    )
  }
}

export default Search