import { database } from "../firebase";


const SET_RECIPES = 'recipes/SET_RECIPES'

const setRecipes = plan => ({
  type: SET_RECIPES,
  recipes: plan
})


export const initRecipesSync = () => (dispatch, getState) => {
  const uid = getState().auth.user.uid
  database().ref(`/recipes`).on('value', (snapshot) => {
    dispatch(setRecipes(snapshot.val()))
  })
}


const initialState = {
  recipes : []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        recipes: action.recipes
      }
    default:
      return state
  }
}