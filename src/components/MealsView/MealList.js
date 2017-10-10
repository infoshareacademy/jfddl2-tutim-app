import React from 'react'
import { Link } from 'react-router-dom'

class MealList extends React.Component {
  render() {
    const { meals: { data } } = this.props.collections

    return (
      <ul>
        {
          data && data.map(
            ({ id, name }) => (
              <li key={id}>
                <Link to={'/meal/' + id}>{name}</Link>
              </li>
            )
          )
        }
      </ul>
    )
  }
}

export default MealList