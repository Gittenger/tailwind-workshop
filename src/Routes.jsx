import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomePage } from './pages/pages-index.js'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  )
}
export default Routes
