import * as React from "react"
const $: any = document.querySelector.bind(document)
import './index.less'
class Loading extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='mobile-loading' style={this.props.style}>
      <div className='mobile-loading-wapper'>
        <i className='iconfont icon-wangyiyunyinlezizhi-copy mobile-loading-icon'></i>
        <div className='mobile-loading-message'>
          {this.props.message || '加载中'}
        </div>
      </div>
    </div>
  }
}
export { Loading }