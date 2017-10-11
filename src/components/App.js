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
import Students from './Students'
import Groups from './Groups'
import Search from './Search'
import Favourite from './Favourite'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Grid>
          <MainMenu/>
          <Route path="/tasker" component={Tasker}/>
          <Route path="/students" component={Students}/>
          <Route path="/groups" component={Groups}/>
          <Route exact path="/search/" component={Search}/>
          <Route path="/search/:uid" component={Search}/>
          <Route path="/favourite" component={Favourite}/>


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
