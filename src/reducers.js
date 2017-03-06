/**
 * Created by superman on 17/3/6.
 */
import {combineReducers} from 'redux'

import {
  VersibilityFilter,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from './actions'

const initialState = {
  visibilityFilter: VersibilityFilter.SHOW_ALL,
  todos: []
};

function visibilityFilter(state = [], action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            })
          }
          return todo;
        })
      })
    default:
      return state;
  }
}


const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
