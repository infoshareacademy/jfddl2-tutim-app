import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import {
  Grid
} from 'react-bootstrap'

import MainMenu from './MainMenu'

import Counter from './Counter'
import Students from './Students'
import Groups from './Groups'
import Search from './Search'
import AddMeal from './AddMeal/index'
import Tasker from './Tasker'
import SocialShare from './SocialShare'


class App extends React.Component {
  render() {
    return (
      <Router>
        <Grid>
          <MainMenu/>

          <Route path="/students" component={Students}/>
          <Route path="/groups" component={Groups}/>
          <Route path="/search" component={Search}/>
          <Route path="/addMeal" component={AddMeal}/>
          <Route path="/tasker" component={Tasker}/>
          <Route path="/socialShare" component={SocialShare}/>

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
