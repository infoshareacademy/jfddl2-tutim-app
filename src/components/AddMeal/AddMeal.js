import React from 'react'

import AddIngredientForm from './AddIngredientForm'
import IngredientList from './IngredientList'

import { getNextId } from './_utils'

class AddMeal extends React.Component {



    state = {
        ingredients: []
    }

    addIngredient = title => {
        const { ingredients } = this.state
        const maxIdSoFar = getNextId(ingredients)

        this.setState({
            ingredients: ingredients.concat({
                id: maxIdSoFar + 1,
                title: title,
                done: false,
                isFavorite: false
            })
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

    handleToggleCompleteIngredientClick = event => {
        const ingredientId = parseInt(event.target.dataset.ingredientId, 10)

        this.setState({
            ingredients: this.state.ingredients.map(
                ingredient => ingredient.id !== ingredientId ?
                    ingredient :
                    // Object.assign({}, task, { done: !task.done })
                    {
                        ...ingredient,
                        done: !ingredient.done
                    }
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
                <h1>
                    Dodaj przepis
                </h1>

                <AddIngredientForm addIngredient={this.addIngredient}/>

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