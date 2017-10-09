import React from 'react'

import FavouriteForm from './SearchForm'

class FavouriteList extends React.Component {
  render() {
    const { searches } = this.props

    return (

      <div>
        <SearchForm/>

        <ul>

          {

            search && searches.map(
              ({id, name}, index, allSearches) => (
                <li key={id}>{name}</li>
              )
            )

          }
        </ul>
      </div>

    )
  }
}

export default FavouriteList