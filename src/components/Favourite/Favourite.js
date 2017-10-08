import React from 'react'

import FavouriteTable from './FavouriteTable'

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

    fetch (
      `${process.env.PUBLIC_URL} /data/database.json`
    ).then(
      response => response.json()
    ).then(
      searches => {
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

        <FavouriteTable favourites={favourites}/>
      </div>
    )
  }


}

export default Favourite