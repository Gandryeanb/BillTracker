import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import INPUT_REGISTER from './reducers/INPUT_REGISTER'
import INPUT_LOGIN from './reducers/INPUT_LOGIN'

const reducers = combineReducers({
  INPUT_REGISTER,
  INPUT_LOGIN
})

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

export default store
