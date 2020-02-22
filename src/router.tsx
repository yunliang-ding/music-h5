import * as React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Layout } from './layout/index'
import { Discovery } from './pages/discovery/index'
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Router path='/app' component={Layout}>
          <Route path='/app/discovery' component={Discovery} />
        </Router>
      </Router>
    )
  }
}
export { AppRouter }
