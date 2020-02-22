import * as React from "react"
import { observer, inject } from 'mobx-react'
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import './index.less'
@inject('UI')
@observer
class Footer extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-footer'>
      app-footer
    </div>
  }
}
export { Footer }