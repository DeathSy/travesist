import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Maps from './components/map'

export default () => (
  <Router>
    <div>
      <Route exect path='/' component={Maps} />
    </div>
  </Router>
)
