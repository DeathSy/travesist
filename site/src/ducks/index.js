import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const reducers = combineReducers({ profile: () => null })

const middlewares = [thunk, logger]

export default (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(...middlewares))
}
