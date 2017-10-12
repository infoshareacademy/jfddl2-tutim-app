import React from 'react'


class SingleView extends React.Component{
  render (){
    console.log(this.props.filteredProduct)
    return(
      <div>
      {
        this.props.filteredProduct ?
          <div>
            <h2> Aktualnie przeglądasz: &nbsp;
              {this.props.filteredProduct.name}
            </h2>
            <h3>Przepis dodany w kategorii: {this.props.mealCategory}
            </h3>
            <p>
              Szczegóły przepisu: {this.props.mealRecipe}
            </p>
          </div>
          :
          'Ładowanie'
      }
      </div>


    )
  }
}

export default SingleView
