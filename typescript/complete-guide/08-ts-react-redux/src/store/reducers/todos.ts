import { FetchTodosAction, Todo, ActionTypes, Action } from '../actions'

export const todosReducer = (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    // this switch is also a type guard, put only : return action , on any line , you will see
    // this action will be returned as the appropriate action corresponding to the case
    case ActionTypes.fetchTodos:
      return action.payload
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return state
  }
}
