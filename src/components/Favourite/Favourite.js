import React from 'react'

import FavouriteTable from './FavouriteTable'

class Favourite extends React.Component {

  state = {
    searches: null,
    fetching: false,
    error: null

  }

  componentDidMount() {
    this.setState({
      fetching: true
    })

    fetch (
      `${process.env.PUBLIC_URL} /data/database.json`
    ).then(
      response => response.json()
    ).then(
      favourites => {
        this.setState({ favourites, fetching: false})
      }
    ).catch(
      error => this.setState({ error, fetching: false})
    )
  }

  render() {
    const { favourites, error, fetching } = this.state
    return (
      <div>
        <h1>Twoje ulubione posiłki</h1>

        {
          favourites !== null ?
            null :
            <p>Brak posilkow do wyswietlenia</p>

        }

        {
          fetching === false ?
            null :

            <p>Pobieranie posilkow...</p>

        }


        {

          error === null ?
            null :
            <p>{error.message}</p>

        }

        <FavouriteTable favourites={favourites}/>
      </div>
    )
  }


}

export default Favourite