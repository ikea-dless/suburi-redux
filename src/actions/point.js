import { createAction } from 'redux-actions'
import * as types from '../constants/ActionTypes'

const incrementPoint = createAction(types.INCREMENT_POINT)

export default {
  incrementPoint
}
