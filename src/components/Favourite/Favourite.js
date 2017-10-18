import React from 'react'
import styles from './Favourite.css'

class Favourite extends React.Component {

  state = {
    favourites: JSON.parse(localStorage.getItem('favourites')) || [],
    filteredRecipes: []
  }

  componentDidMount() {
    fetch(
      `${process.env.PUBLIC_URL} /data/database.json` // template string usage
    ).then(
      response => response.json()
    ).then((recipes) => {
        let filteredRecipes = recipes.filter((recipe) => {
          return this.state.favourites.includes(recipe.uid)
        })
        this.setState({
          filteredRecipes: filteredRecipes
        })
      }
    )
  }

  render() {
    return (
      this.state.filteredRecipes.map((recipe, index) => {
        return <div class="favdPI"><ul class="favPI"><li key={index} class="favPI">{recipe.name}

        </li></ul></div>
      })
    )
  }


}
export default Favourite