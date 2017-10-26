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


const initialState = {
  plan : [{
    id: '',
    dayTime: ''
  }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAN:
      return {
        ...state,
        plan: action.plan
      }
    default:
      return state
  }
}