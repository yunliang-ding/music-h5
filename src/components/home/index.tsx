import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Div1 } from './div1'
import { Div2 } from './div2'
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
    </div>
  }
}
export { Home }