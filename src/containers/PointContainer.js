import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { incrementPoint } from '../actions/point'

import configureStore from '../store/index'
const store = configureStore()

const SubmitButton = ({ dispatch }) => (
  <Button
    handleOnClick={ () => {
      dispatch(incrementPoint(10))
      console.log(dispatch())
    } }
    buttonText={ "おせ" }
  />
)

const mapStateToProps = (state) => {
  return { point: state }
}

export default connect(mapStateToProps)(SubmitButton)
