import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import docReady from 'doc-ready'
import configureStore from './store/index'

const initialState = {}

docReady(() => {
  const store = configureStore(initialState)
  ReactDom.render(
    <Provider store={ store }>
    </Provider>,
    document.getElementById('root')
  )
})
