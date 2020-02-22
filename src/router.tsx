import * as React from 'react'
import { Router, browserHistory } from 'react-router'
import { Layout } from './layout/index'
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Router path='*' component={Layout} />
      </Router>
    )
  }
}
export { AppRouter }
