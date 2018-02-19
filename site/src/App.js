import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/home'

export default () => (
  <Router>
    <div>
      <Route exect path='/' component={Home} />
    </div>
  </Router>
)
