import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Div1 } from './div1'
import { Div2 } from './div2'
import { Div3 } from './div3'
import { Div4 } from './div4'
import './index.less'
@inject('UI')
@observer
class Home extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-home'>
      <Div1 />
      <Div2 />
      <div className='app-home-bottom'>
        <Div3 />
        <Div4 />
      </div>
    </div>
  }
}
export { Home }