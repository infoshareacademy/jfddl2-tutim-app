import React from 'react'
import MealDetails from './MealDetails'
import DataFetcher from '../DataFetcher'

class meal extends React.Component {

  render() {
  const mealid = parseInt(
    this.props.match.params.mealID,
    10
  )

  return (
    <div>
      <h1>Meal: {mealid}</h1>
      <DataFetcher collections={{
        students: {
          url: `${process.env.PUBLIC_URL}/data/database.json`,
          label: 'Meal'
        }
      }}>
        <MealDetails mealId={mealid}/>
      </DataFetcher>
    </div>
  )
}
}

export default meal

