import React from 'react'

class AddIngredientForm extends React.Component {

    state = {
        ingredientsInputValue: ''
    }

    handleIngredientInputChange = event => {
        this.setState({
            ingredientsInputValue: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.addIngredient(this.state.ingredientsInputValue)

        this.setState({
            ingredientsInputValue: ''
        })
    }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    value={this.state.ingredientsInputValue}
                    onChange={this.handleIngredientInputChange}
                />

                <button>
                    Dodaj składnik
                </button>
            </form>

        )
    }
}

export default AddIngredientForm