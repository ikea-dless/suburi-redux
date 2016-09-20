import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import { incrementPoint } from '../actions/point'

let input

const IncrementForm = ({ dispatch }) => (
  <div>
    <input ref={ (node) => { input = node } } type="number" />
    <Button
      handleOnClick={ () => {
        dispatch(incrementPoint(input.value))
      } }
      buttonText={ "おせ" }
    />
  </div>
)

IncrementForm.PropTypes = {
  dispacth: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { point: state }
}

export default connect(mapStateToProps)(IncrementForm)
