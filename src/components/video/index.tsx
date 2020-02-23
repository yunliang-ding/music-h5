import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Div1 } from './div1'
import './index.less'
@inject('UI')
@observer
class Video extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-video'>
      <Div1 />
    </div>
  }
}
export { Video }