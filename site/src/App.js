import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Input from './components/input'
import Here from './components/here'

export default () => (
  <Router>
    <div>
      <Route exect path='/' component={Here} />
    </div>
  </Router>
)
