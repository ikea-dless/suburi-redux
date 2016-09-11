import { handleActions } from 'redux-actions'
import * as types from '../constants/ActionTypes'

const initialState = {}

const increment = (state, action) => {
  return { state, action }
}

const point = handleActions({
  INCREMENT_POINT: increment
}, initialState)

export default point
