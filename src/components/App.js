import React from 'react'
import {  BrowserRouter as Router,
      Route,
} from 'react-router-dom'
import {
  Grid
} from 'react-bootstrap'

import MainMenu from './MainMenu'



import Search from './Search'
import Favourite from './Favourite'
import AddMeal from './AddMeal/index'



class App extends React.Component {
  render() {
    return (
      <Router>
        <Grid>
          <MainMenu/>


          <Route exact path="/search/" component={Search}/>
          <Route path="/search/:uid" component={Search}/>
          <Route path="/favourite" component={Favourite}/>


          <Route path="/addMeal" component={AddMeal}/>


        </Grid>
      </Router>
    )
  }
}

export default App
