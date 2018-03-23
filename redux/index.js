import { combineReducers } from 'redux'

// reducers
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1

    default:
      return state
  }
}

const initState = {
  componentA: true,
  componentB: true
}

const component = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, [action.comp]: !state[action.comp] }

    default:
      return state
  }
}

export default combineReducers({
  counter,
  component
})