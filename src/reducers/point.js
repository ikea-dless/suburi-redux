import { handleActions } from 'redux-actions'
import * as types from '../constants/ActionTypes'

// const initialState = {}

// const increment = (state, action) => {
//   return { state, action }
// }
//
// const point = handleActions({
//   INCREMENT_POINT: increment
// }, initialState)
//
// export default point

const point = (state = {}, action) => {
  switch (action.type) {
    case types.INCREMENT_POINT:
      return {
        arg: action.arg
      }
    default:
      return state
  }
}

export default point
