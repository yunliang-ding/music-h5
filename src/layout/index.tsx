import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Button } from 'react-weui';
import 'weui';
import 'react-weui/build/dist/react-weui.css';
import './index.less'
@inject('UI')
@observer
class Layout extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-layout'>
      <Button>hello wechat</Button>
    </div>
  }
}
export { Layout }