import { database } from "../firebase";


const ADD_PLAN = 'planer/ADD_PLAN'

const addPlan = plan => ({
  plan: ADD_PLAN
})


export const addPlan = plan => () => {
  const id = planer().currentData.id
  database().ref('/planer' + id + '/planer').push({
    category: category,
    dayTime: dayTime

  })
}


const initialState = {
  plan : [{
    id: '',
    dayTime: ''
  }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:
      return {
        ...state,
        plan: Object.entries
      }
  }
}