import * as types from '../constants/ActionTypes'

const initialState = { sum: 0 }

const point = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_POINT:
      return {
        count: action.count,
        sum: state.sum + action.count
      }
    default:
      return state
  }
}

export default point
