import React from 'react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'

import MainMenu from './MainMenu'
import Home from './Home'


import Search from './Search'
import Favourite from './Favourite'
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



class App extends React.Component {
    render() {
        return (
            <Router>
                <Grid>
                    <MainMenu/>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/search" component={Search}/>
                    <Route path="/search/:uid" component={Search}/>
                    <Route path="/favourite" component={Favourite}/>
                    <Route path="/addMeal" component={AddMeal}/>
                </Grid>
            </Router>
        )
    }

}

export default App
