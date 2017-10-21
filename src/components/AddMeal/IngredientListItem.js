import React from 'react'
import { Button } from 'react-bootstrap'

const IngredientListItem = ({
                          ingredient

                      }) => (
    <li key={ingredient.uid}>

        {ingredient.uid},
        {ingredient.name},
        {ingredient.kcal},
        {ingredient.recipe}
        {ingredient.category}


    </li>
)

export default IngredientListItem