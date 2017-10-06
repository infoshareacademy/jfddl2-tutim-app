import React from 'react'
import { Button } from 'react-bootstrap'

const IngredientListItem = ({
                          ingredient,
                          handlers: {
                              handleRemoveIngredientClick,
                              handleToggleCompleteIngredientClick
                          }
                      }) => (
    <li key={ingredient.id}>
        {
            ingredient.done ?
                <em>[x]</em> :
                <em>[ ]</em>
        }
        {ingredient.title}

        <Button
            data-ingredient-id={ingredient.id}
            onClick={handleRemoveIngredientClick}
        >
            Usuń
        </Button>

        <Button
            data-ingredient-id={ingredient.id}
            onClick={handleToggleCompleteIngredientClick}
        >
            {
                ingredient.done ?
                    'mark as undone' :
                    'mark as done'
            }
        </Button>
    </li>
)

export default IngredientListItem