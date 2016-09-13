import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'

const SubmitButton = () => (
  <Button
    handleOnClick={ () => { console.log('hoge') } }
    buttonText={"おせ！！"}
  />
)

const mapStateToProps = (state) => {
  return { point: state }
}

export default connect(mapStateToProps)(SubmitButton)
