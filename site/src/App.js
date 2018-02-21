import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Map from '../src/components/map'

export default () => (
  <Router>
    <div>
      <Route exect path='/' component={Map} />
    </div>
  </Router>
)
