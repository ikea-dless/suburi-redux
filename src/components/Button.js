import React from 'react'

export const Button = ({ handleOnClick, buttonText }) => (
  <button onClick={ handleOnClick }>
    { buttonText }
  </button>
)

export default Button
