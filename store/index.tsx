import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

export const initialState = {}

export interface RootState {}

export const rootReducer = combineReducers<RootState>({})

export const store = createStore(
  rootReducer,
  initialState,

  applyMiddleware(thunk)
)
