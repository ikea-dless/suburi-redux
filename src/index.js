import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import docReady from 'doc-ready'
import configureStore from './store/index'
import PointContainer from './containers/PointContainer'

const initialState = {}
const hoge = () => { console.log('hoge') }

docReady(() => {
  const store = configureStore(initialState)
  ReactDom.render(
    <Provider store={ store }>
      <PointContainer />
    </Provider>,
    document.getElementById('root')
  )
})
