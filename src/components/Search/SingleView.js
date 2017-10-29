import React from 'react'
import {Link} from 'react-router-dom'
import {Alert, Button, ButtonGroup, ButtonToolbar, Table} from 'react-bootstrap'
import styles from './jakub.css'
import PieChartWithCustomizedLabel from './PieChartWithCustomizedLabel'




class SingleView extends React.Component {

  state = {
    favourites:  JSON.parse(localStorage.getItem('favourites')) || [],
    addMeal: JSON.parse(localStorage.getItem('addMeal')) || [],
  }

  addToFavourites = (id) => {

    this.setState({
      favourites: this.state.favourites.concat(id)
    }, () => {
      localStorage.setItem('favourites', JSON.stringify(this.state.favourites));
    });


  }

  render() {
    return (

      <div>
        {
          this.props.filteredProduct ?
            <div className="singleView">
              <h2> {this.props.filteredProduct.name}
              </h2>
              <div className="addToFav likeMe"> <button><a href="#" onClick={() => this.addToFavourites(this.props.filteredProduct.uid)}
                                                                     class="linker">dodaj do ulubionych</a></button></div>

              <div className="heading">
                <h4>Kategoria: {this.props.filteredProduct.category}
                </h4>
                <h4>Liczba kalorii: {this.props.filteredProduct.kcal}</h4>
                <h4>Składniki odżywcze w 100 g produktu:</h4>
                <h4>Białka: {this.props.filteredProduct.containsIn100g.protein}</h4>
                <h4>Tłuszcze: {this.props.filteredProduct.containsIn100g.fat}</h4>
                <h4>Węglowodany: {this.props.filteredProduct.containsIn100g.carbs}</h4>
                <img src={this.props.filteredProduct.image}/>
              </div>

              {/*<PieChartWithCustomizedLabel/>*/}

              {/*<div><img*/}
              {/*src="https://www.foodlion.com/content/dam/food-lion/recipes/Citrus%20Glazed%20Spiral%20Cut%20Ham/citrusspiralcutham_main.jpg.adapt.full.high.jpg"/>*/}
              {/*</div>*/}
              <div className="description"> <p>
                <b>Szczegóły przepisu:</b> &nbsp; {
                this.props.filteredProduct.recipe.split('\n').map(
                  row => <p>{row}</p>
                )
              }
              </p></div>

              {/*button do przodu i do tyłlu*/}

              <div className="PrevNext"> <a href="#">poprzedni</a>
                <a href="#">następny</a></div>

            </div>
            :
            'Ładowanie'
        }






      </div>


    )
  }
}

export default SingleView