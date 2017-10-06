import React from 'react'
import { Button } from 'react-bootstrap'

const IngredientListItem = ({
                          ingredient,
                          handlers: {
                              handleRemoveIngredientClick,

                          }
                      }) => (
    <li key={ingredient.id}>

        {ingredient.title}

        <Button
            data-ingredient-id={ingredient.id}
            onClick={handleRemoveIngredientClick}
        >
            Usuń
        </Button>

    </li>
)

export default IngredientListItem