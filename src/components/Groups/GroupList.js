import React from 'react'

import GroupSearchForm from './GroupSearchForm'

class GroupList extends React.Component {
  render() {
    const { groups } = this.props

    return (
      <div>
        <GroupSearchForm/>
        <ul>
          {
            groups && groups.map(
              ({ id, name }, index, allGroups) => (
                <li key={id}>{name}</li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

export default GroupList