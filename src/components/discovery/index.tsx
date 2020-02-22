import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Div1 } from './div1'
import { Div2 } from './div2'
import { Div3 } from './div3'
import { Div4 } from './div4'
import './index.less'
@inject('UI')
@observer
class DiscoveryBody extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-discovery-body'>
      <Div1 />
      <Div2 />
      <Div3 />
      <Div4 />
    </div>
  }
}
export { DiscoveryBody }