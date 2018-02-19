import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Input from './components/input'

export default () => (
  <Router>
    <div>
      <Route exect path='/' component={Input} />
    </div>
  </Router>
)
