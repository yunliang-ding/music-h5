import * as React from "react"
import { Alert } from '../../mobile'
class Div1 extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-towns-div1'>
      <Alert message='delay' />
    </div>
  }
}
export { Div1 }