import { createStore, combineReducers, applyMiddleware } from 'redux'
import reducers from './reducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers(reducers),
  { userInfo: null },
  applyMiddleware(thunk)
)
export default store
