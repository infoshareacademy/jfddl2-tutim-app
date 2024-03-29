import { database } from "../firebase";


const SET_PLAN = 'planer/SET_PLAN'

const setPlan = plan => ({
  type: SET_PLAN,
  plan: plan
})


export const initPlanSync = () => (dispatch, getState) => {
  const uid = getState().auth.user.uid
  database().ref(`/mealPlans/${uid}`).on('value', (snapshot) => {
    dispatch(setPlan(snapshot.val()))
  })
}

export const addMealToPlan = (newMeal) => (dispatch, getState) => {
  const uid = getState().auth.user.uid
  const nextIndex = getState().planer.plan.length

    if(getState().planer.plan.length === null) {
    return [];
    }

  database().ref(`/mealPlans/${uid}/${nextIndex}`).set(newMeal)
}


const initialState = {
  plan : []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAN:
      return {
        ...state,
        plan: action.plan || initialState.plan
      }
    default:
      return state
  }
}