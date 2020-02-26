import * as React from "react"
const $:any = document.querySelector.bind(document)
import './index.less'
class PullRefresh extends React.Component<any, any> {
  props: any
  start: any = 0
  end: any = 0
  constructor(props) {
    super(props)
  }
  bind = (element, type, callback) => {
    element.addEventListener(type, callback, false);
  }
  touchstart = (event) => {
    $('.pull_self_refresh_loading_iconfont').style.transition = `0s`
    var touch = event.targetTouches[0];
    this.start = touch.pageY
  }
  touchmove = (e) => {
    let { element } = this.props
    if(e.targetTouches.length > 0 && $(element).scrollTop === 0){
      this.end = e.touches[0].pageY - this.start
      this.end = this.end > 120 ? 120 : this.end
      $('.pull_self_refresh_loading_iconfont').style.top = this.end
      $('.pull_self_refresh_loading_iconfont').style.transform = `rotate(${this.end * 1.5}deg)` 
    }
  }
  touchend = () => {
    if (this.end === 120) { // 开始刷新操作
      $('.pull_self_refresh_loading_iconfont').style.top = 100
      $('.pull_self_refresh_loading_iconfont').style.transition = `.5s`
      $('.pull_self_refresh_loading_iconfont').style.animation = 'refresh-animation .8s linear infinite'
      setTimeout(() => {
        this.clear()
      }, 2000)
    } else {
      this.clear()
    }
  }
  clear = () => {
    $('.pull_self_refresh_loading_iconfont').style.transition = `.5s`
    $('.pull_self_refresh_loading_iconfont').style.top = -50
    $('.pull_self_refresh_loading_iconfont').style.animation = ''
    $('.pull_self_refresh_loading_iconfont').style.transform = `rotate(0deg)` 
    this.end = 0
    this.start = 0
  }
  componentDidUpdate (){
    let { element } = this.props // 下拉的对象
    this.bind($(element), "touchstart", this.touchstart)
    this.bind($(element), "touchmove", this.touchmove)
    this.bind($(element), "touchend", this.touchend)
  }
  componentDidMount (){
    let { element } = this.props // 下拉的对象
    this.bind($(element), "touchstart", this.touchstart)
    this.bind($(element), "touchmove", this.touchmove)
    this.bind($(element), "touchend", this.touchend)
  }
  render(){
    return <div className='pull_self_refresh'>
      <div className='pull_self_refresh_loading'>
        <i className='iconfont icon-shuaxin1111 pull_self_refresh_loading_iconfont'></i>
      </div>
      {this.props.children}
    </div>
  }
}
export { PullRefresh }