import React, { PropTypes } from 'react'

const Button = ({ handleOnClick, buttonText }) => (
  <button onClick={ handleOnClick }>
    { buttonText }
  </button>
)

Button.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
}

export default Button
