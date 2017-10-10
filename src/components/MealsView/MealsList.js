import React from 'react'


class MealsList extends React.Component {
  render() {
    const {meals} = this.props

    return (
      <ul>
        {
          meals && meals.map(
            ({id, name}, index, allGroups) => (
              <li key={id}>{name}</li>
            )
          )
        }
      </ul>
    )
  }
}

    export default MealsList