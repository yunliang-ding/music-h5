import * as React from "react"
const $: any = document.querySelector.bind(document)
import './index.less'
class Alert extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount (){
    $('.mobile-alert').style.animation = 'move 1s linear'
  }
  render() {
    return <div className='mobile-alert' style={this.props.style}>
      {this.props.message}
    </div>
  }
}
export { Alert }