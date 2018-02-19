import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'

import makeStore from './ducks'

ReactDOM.render(
  <Provider store={makeStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
)
