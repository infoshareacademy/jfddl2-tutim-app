import React from 'react'

import AddIngredientForm from './AddIngredientForm'
import IngredientList from './IngredientList'

import { getNextId } from './_utils'



class AddMeal extends React.Component {



    state = {
        ingredients: []
    }

    addRecipe = newMeal => {
        const { ingredients } = this.state
        const maxIdSoFar = getNextId(ingredients)

        this.setState({
            ingredients: ingredients.concat(
            //     {
            //     id: maxIdSoFar + 1,
            //     title: newMeal.name,
            //     done: false,
            //     isFavorite: false
            // }
                newMeal
            )
        }, () => {
            localStorage.setItem('addMeal', JSON.stringify(this.state))
        })
    }

    handleRemoveIngredientClick = event => {
        const ingredientId = parseInt(event.target.dataset.ingredientId, 10)

        this.setState({
            ingredients: this.state.ingredients.filter(
                ingredient => ingredientId  !== ingredient.id
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

    componentDidUpdate() {
        console.log('addMeal did update')
    }

    render() {
        console.log('addMeal render')

        const { ingredients } = this.state
        const handlers = {
            handleRemoveIngredientClick: this.handleRemoveIngredientClick,
            handleToggleCompleteIngredientClick: this.handleToggleCompleteIngredientClick
        };

        return (
            <div>
                <h2>
                    Dodaj przepis
                </h2>

                <AddIngredientForm addRecipe={this.addRecipe}/>

                 <IngredientList
                    ingredients={ingredients}
                    handlers={handlers}
                />

                <ul>
                    {
                        ingredients.filter(
                            ingredient => ingredient.done
                        ).map(
                            ingredient => <li key={ingredient.id}>{ingredient.title}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default AddMeal