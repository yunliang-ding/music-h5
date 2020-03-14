import * as React from 'react'
import { Router, hashHistory, Route, Redirect, IndexRoute} from 'react-router'
import { Layout } from './layout/index'
import { Home } from './components/home/index'
import { Discovery } from './components/discovery/index'
import { Towns } from './components/towns/index'
import { Video } from './components/video/index'
import { Album } from './components/album/index'
import { Playlist } from './components/playlist/index'
import { Login } from './components/login/index'
class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Redirect from='/' to='discovery'/>
        <Route path='/' component={Layout}>
          <IndexRoute component={Discovery} />
          <Route path='home' component={Home} />
          <Route path='discovery' component={Discovery} />
          <Route path='towns' component={Towns} />
          <Route path='video' component={Video} />
          <Route path='album' component={Album} />
          <Route path='playlist' component={Playlist} />
        </Route>
        <Route path='/login' component={Login} />
      </Router>
    )
  }
}
export { AppRouter }
