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
import SocialShare from './SocialShare'
import UserProfile from './UserProfile'
import PlanerTable from './Planer'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Grid>
                    <MainMenu/>



                    <Route path="/search"
                           component={Search}/>
                    <Route path="/addMeal"
                           component={AddMeal}/>
                     <Route path="/favourite"
                            component={Favourite}/>
                    <Route path="/socialShare"
                           component={SocialShare}/>

                  <Route path="/userProfile"
                           component={UserProfile}/>

                  <Route path="/planerTable"
                         component={PlanerTable}/>

                </Grid>
            </Router>
        )
    }

}



export default App
