import * as React from "react"
import { Alert } from '../../mobile'
class Div1 extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-towns-div1'>
      <Alert message='云村暂未开发' />
    </div>
  }
}
export { Div1 }