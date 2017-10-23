import React from 'react'

import AddIngredientForm from './AddIngredientForm'
import IngredientList from './IngredientList'
import styles from './AddMeal.css'

import {getNextId} from './_utils'


class AddMeal extends React.Component {


    state = {
        ingredients: JSON.parse(localStorage.getItem('addMeal')) || []
    }

    addRecipe = newMeal => {
        const {ingredients} = this.state
        const maxIdSoFar = getNextId(ingredients)

        this.setState({
            ingredients: ingredients.concat(
                newMeal
            )
        }, () => {
            localStorage.setItem('addMeal', JSON.stringify(this.state.ingredients))
        })
    }



    componentWillMount() {
        console.log('addMeal will mount')
        this.setState(
            JSON.parse(
                localStorage.getItem('addMeal')
            )
        )
    }

    componentDidMount() {
        console.log('addMeal did mount')
    }

    componentWillUpdate() {
        console.log('addMeal will update')
    }



    render() {
        console.log('addMeal render')

        const {ingredients} = this.state
        const handlers = {
            handleToggleCompleteIngredientClick: this.handleToggleCompleteIngredientClick
        };

        return (
            <div>
                <h2 className="addMM">
                    Dodaj przepis
                </h2>

               <AddIngredientForm addRecipe={this.addRecipe}/>

                <IngredientList
                    ingredients={ingredients}
                    handlers={handlers}
                />

                <ul className="addMM">
                    {
                        ingredients.filter(
                            ingredient => ingredient.done
                        ).map(
                            ingredient => <li className="addMM"  key={ingredient.id}>{ingredient.title}</li>
                        )
                    }
                </ul>
            </div>
        )
    }


}

export default AddMeal