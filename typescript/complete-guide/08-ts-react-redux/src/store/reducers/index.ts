import { combineReducers } from 'redux'
import { Todo } from '../actions'
import { todosReducer } from './todos'

export interface StoreState {
  todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
  // by Providing this optional generic annotation, this will not ONLY make sure that the keys are are
  // matching, but for example by using this generic , ts will make sure that todosReducer returns
  // the correct type (which is an array of Todo in this case )
  todos: todosReducer,
})
