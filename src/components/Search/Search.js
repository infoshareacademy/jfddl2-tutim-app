import React from 'react'

import SearchTable from './SearchTable'

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
      `${process.env.PUBLIC_URL}/data/groups.json` // template string usage
    ).then(
      response => response.json()
    ).then(
      searches => this.setState({ searches, fetching: false })
    ).catch(
      error => this.setState({ error, fetching: false })
    )
  }

  render() {
    const { searches, error, fetching } = this.state

    return (
      <div>
        <h1>Groups</h1>

        {
          searches !== null ?
            null :
            <p>No groups to show</p>
        }

        {
          fetching === false ?
            null :
            <p>Fetching groups now...</p>
        }

        {
          error === null ?
            null :
            <p>{error.message}</p>
        }

        <SearchTable search={searches} />
      </div>
    )
  }
}

export default Search