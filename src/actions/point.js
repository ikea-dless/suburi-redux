import * as types from '../constants/ActionTypes'

export const incrementPoint = (count) => {
  return {
    type: types.INCREMENT_POINT,
    count: count
  }
}
