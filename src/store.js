import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'

import auth, { init as initAuth } from './state/auth'
import planer from './state/planer'

const reducer = combineReducers({
  auth,
  planer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

store.dispatch(initAuth())

export default store