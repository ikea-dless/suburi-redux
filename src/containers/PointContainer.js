import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { incrementPoint } from '../actions/point'

const SubmitButton = ({ dispatch }) => (
  <Button
    handleOnClick={ () => {
      dispatch(incrementPoint(10))
    } }
    buttonText={ "おせ" }
  />
)

const mapStateToProps = (state) => {
  return { point: state }
}

export default connect(mapStateToProps)(SubmitButton)
