import React from 'react'
import { database } from "../../firebase";
import AddIngredientForm from './AddIngredientForm'

class AddMeal extends React.Component {
    addRecipe = newMeal => {

          database().ref('recipes').once('value').then((snapshot)=>{
            let length = snapshot.val().length
            database().ref(`recipes/${length}`).set(newMeal)
          })
    }

    render() {
        return (
            <div>
                <h2 className="addMM">
                    Dodaj przepis
                </h2>
               <AddIngredientForm addRecipe={this.addRecipe}/>
            </div>
        )
    }

}

export default AddMeal