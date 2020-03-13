import * as React from "react"
const $: any = document.querySelector.bind(document)
import './index.less'
class Progress extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  setProgress = () => {
    const { progress } = this.props
    if (progress <= 180) {
      $(".right").style.transform = `rotate(${progress - 180}deg)`
      $(".left").style.transform = ` rotate(-180deg)`
    } else {
      $(".right").style.transform = `rotate(0deg)`
      $(".left").style.transform = `rotate(${progress - 360}deg)`
    }
  }
  componentDidUpdate() {
    this.setProgress()
  }
  render() {
    return <div className="progress" style={this.props.style}>
    <div className="pie_left"  style={{
        clip: `rect(auto, ${this.props.style.width / 2}px , auto, auto)`
      }}>
      <div className="left" style={{
        clip: `rect(auto, ${this.props.style.width / 2}px , auto, auto)`
      }}></div>
    </div>
    <div className="pie_right" style={{
        clip: `rect(0, auto, auto, ${this.props.style.width / 2}px)`
      }}>
      <div className="right" style={{
        clip: `rect(0, auto, auto, ${this.props.style.width / 2}px)`
      }}></div>
    </div>
    <div className="mask">
      {this.props.children}
    </div>
  </div>
  }
}
export { Progress }