import * as React from "react"
const $: any = document.querySelector.bind(document)
import './index.less'
class Toast extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='mobile-toast' style={this.props.style}>
      <i className='iconfont icon-loading mobile-toast-icon'></i>
      <div className='mobile-toast-message'>
        {this.props.message || '加载中'}
      </div>
    </div>
  }
}
export { Toast }