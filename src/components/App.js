import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import {
  Grid
} from 'react-bootstrap'

import MainMenu from './MainMenu'
import Tasker from './Tasker'
import Counter from './Counter'
import Meals from './MealsView'
import Meal from './MealView'
import Groups from './Groups'
import Search from './Search'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Grid>
          <MainMenu/>
          <Route path="/tasker" component={Tasker}/>
          <Route path="/meals" component={Meals}/>
          <Route path="/meals/:mealId" component={Meal}/>
          <Route path="/groups" component={Groups}/>
          <Route path="/search" component={Search}/>

          <Route
            path="/counter"
            render={
              props =>
              <Counter {...props}
                       title="Foo"
                       delta={10}
                       startFrom={0}
              />
            }/>
        </Grid>
      </Router>
    )
  }
}

export default App
