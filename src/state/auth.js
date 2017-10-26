import { auth } from '../firebase'
import {initPlanSync} from "./planer";

const SET_USER = 'auth/SET_USER'

const setUser = user => ({
  type: SET_USER,
  user: user
})

export const init = () => dispatch => {
  auth().onAuthStateChanged(
    user => {
      dispatch(setUser(user))
      if(user)
        dispatch(initPlanSync())
    }
  )
}

export const signIn = (email, password) => dispatch => {
  auth().signInWithEmailAndPassword(email, password)
}

export const signUp = (email, password) => dispatch => {
  auth().createUserWithEmailAndPassword(email, password)
}

export const signOut = () => dispatch => {
  auth().signOut()
}

const initialState = {
  user: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}