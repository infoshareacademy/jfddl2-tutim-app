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
      localStorage
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
    console.log('searches')
    const { searches, error, fetching } = this.state
    return (
      <div>
        <h1>Twoje ulubione posiłki</h1>

        {
          searches !== null ?
            null :
            <p></p>

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

        <FavouriteTable favourite={searches}/>
      </div>
    )
  }


}

export default Favourite