import React from 'react'
import { Link } from 'react-router-dom'
import {Alert, Button, ButtonGroup, ButtonToolbar, Table} from 'react-bootstrap'


class SingleView extends React.Component{
  render (){
    console.log(this.props.filteredProduct)
    return(
      <div>
      {
        this.props.filteredProduct ?
          <div>
            <h2> {this.props.filteredProduct.name}
            </h2>
            <h4>Kategoria: {this.props.filteredProduct.category}
            </h4>
            <h4>Liczba kalorii: {this.props.filteredProduct.kcal}</h4>
            <Button href="#">dodaj do ulubionych</Button>
            <div><img src="https://www.foodlion.com/content/dam/food-lion/recipes/Citrus%20Glazed%20Spiral%20Cut%20Ham/citrusspiralcutham_main.jpg.adapt.full.high.jpg"/> </div>
            <p>
              Szczegóły przepisu: {this.props.filteredProduct.recipe}
            </p>

{/*button do przodu i do tyłlu*/}

            <Button href="#" >poprzedni</Button>
            <Button href="#">następny</Button>

          </div>
          :
          'Ładowanie'
      }
      </div>


    )
  }
}

export default SingleView
