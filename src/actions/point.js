import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'

// const incrementPoint = createAction(types.INCREMENT_POINT)

export const incrementPoint = (count) => {
  return {
    type: types.INCREMENT_POINT,
    count: count
  }
}

// export default incrementPoint
