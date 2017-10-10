import React from 'react'
import MealList from './MealsList'
import DataFetcher, { ErrorHandler } from '../DataFetcher'

class Meals extends React.Component {
  render() {
    return (
      <div>
        <h1>Lista dostępnych potraw</h1>




        <DataFetcher collections={{
          meals: {
            url: process.env.PUBLIC_URL + '/data/database.json',
            label: 'meals'
          }
        }}>
          <ErrorHandler>
            <MealList/>
          </ErrorHandler>
        </DataFetcher>
      </div>
    )
  }
}

export default Meals