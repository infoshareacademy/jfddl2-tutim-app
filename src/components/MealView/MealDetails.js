import React from 'react'

class MealDetails extends React.Component {
  render() {
    const mealid = this.props.mealid
    const meals = this.props.collections.meals.data
    const meal = meals && meals.find(
      meal => mealid === meal.id
    )

    return (
      meal === null ?
        <div>No data yet</div> :
        <div>
          <h1>{meal.name}</h1>
          <h3>{meal.category}</h3>
          <p>Przepis: {meal.recipe}</p>
        </div>
    )
  }
}

export default MealDetails