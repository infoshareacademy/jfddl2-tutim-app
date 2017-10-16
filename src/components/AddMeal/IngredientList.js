import React from 'react'

import IngredientListItem from './IngredientListItem'


const IngredientList = ({
                      ingredients,
                      handlers
                  }) => (
    <ul>
        {
            ingredients.map(
                ingredient => (
                    <IngredientListItem
                        key={ingredient.uid}
                        ingredient = {ingredient}
                        handlers={handlers}
                    />
                )
            )
        }
    </ul>
)

export default IngredientList