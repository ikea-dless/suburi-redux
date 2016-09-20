import * as types from '../constants/ActionTypes'

const initialState = { sum: 0 }

const point = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_POINT:
      const countInt = parseInt(action.count)
      return {
        count: countInt,
        sum: state.sum + countInt
      }
    default:
      return state
  }
}

export default point
