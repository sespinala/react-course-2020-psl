import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { imagesReducer } from './imagesReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  combineReducers({
    imagesList: imagesReducer
  }), composeEnhancers(
    applyMiddleware(thunk)
  )
)