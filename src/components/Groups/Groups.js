import React from 'react'

import GroupTable from './GroupTable'

class Groups extends React.Component {

  state = {
    groups: null,
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
      groups => this.setState({ groups, fetching: false })
    ).catch(
      error => this.setState({ error, fetching: false })
    )
  }

  render() {
    const { groups, error, fetching } = this.state

    return (
      <div>
        <h1>Groups</h1>

        {
          groups !== null ?
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

        <GroupTable groups={groups} />
      </div>
    )
  }
}

export default Groups