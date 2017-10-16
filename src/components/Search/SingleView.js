import React from 'react'
import {Link} from 'react-router-dom'
import {Alert, Button, ButtonGroup, ButtonToolbar, Table} from 'react-bootstrap'
import styles from './jakub.css';

class SingleView extends React.Component {
  render() {
    console.log(this.props.filteredProduct)
    return (
      <div>
        {
          this.props.filteredProduct ?
            <div className="singleView">
              <h2> {this.props.filteredProduct.name}
              </h2>     <div className="addToFav likeMe"> <a href="#">dodaj do ulubionych</a></div>

              <div className="heading">
                <h4>Kategoria: {this.props.filteredProduct.category}
                </h4>
                <h4>Liczba kalorii: {this.props.filteredProduct.kcal}</h4>
              </div>

              <div><img
                src="https://www.foodlion.com/content/dam/food-lion/recipes/Citrus%20Glazed%20Spiral%20Cut%20Ham/citrusspiralcutham_main.jpg.adapt.full.high.jpg"/>
              </div>
             <div className="description"> <p>
               <b>Szczegóły przepisu:</b> &nbsp; {this.props.filteredProduct.recipe}
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
