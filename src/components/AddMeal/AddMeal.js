import React from 'react'

import AddIngredientForm from './AddIngredientForm'
import IngredientList from './IngredientList'
import styles from './AddMeal.css'

import {getNextId} from './_utils'


class AddMeal extends React.Component {


    state = {
        ingredients: []
    }

    addRecipe = newMeal => {
        const {ingredients} = this.state
        const maxIdSoFar = getNextId(ingredients)

        this.setState({
            ingredients: ingredients.concat(
                newMeal
            )
        }, () => {
            localStorage.setItem('addMeal', JSON.stringify(this.state))
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

    componentDi
    render() {
        console.log('addMeal render')

        const {ingredients} = this.state
        const handlers = {
            handleToggleCompleteIngredientClick: this.handleToggleCompleteIngredientClick
        };

        return (
            <div>
                <h2 class="addMM">
                    Dodaj przepis
                </h2>

                <AddIngredientForm addRecipe={this.addRecipe}/>

                <IngredientList
                    ingredients={ingredients}
                    handlers={handlers}
                />

                <ul class="addMM">
                    {
                        ingredients.filter(
                            ingredient => ingredient.done
                        ).map(
                            ingredient => <li class="addMM"  key={ingredient.id}>{ingredient.title}</li>
                        )
                    }
                </ul>
            </div>
        )
    }dUpdate() {
        console.log('addMeal did update')
    }

}

export default AddMeal