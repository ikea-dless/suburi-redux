import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'

// const incrementPoint = createAction(types.INCREMENT_POINT)

export const incrementPoint = (arg) => {
  return {
    type: types.INCREMENT_POINT,
    arg
  }
}

// export default incrementPoint
