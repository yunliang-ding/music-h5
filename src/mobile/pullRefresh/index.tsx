import * as React from "react"
import './index.less'
const Window: any = window
const $: any = document.querySelector.bind(document)
class PullRefresh extends React.Component<any, any> {
  props: any
  phyTouch: any
  constructor(props) {
    super(props)
  }
  componentDidUpdate() {
    this.phyTouch.min = window.innerHeight - $(this.props.element).offsetHeight - 90
  }
  componentDidMount() {
    const { element } = this.props
    let scroller:any = $("#scroller")
    let arrow:any = $("#arrow")
    let pull_refresh:any = $("#pull_refresh")
    //注入transform属性
    Window.Transform(pull_refresh, true);
    Window.Transform(scroller, true);
    this.phyTouch = new Window.PhyTouch({
      touch: "#wrapper",//反馈触摸的dom
      vertical: true,//不必需，默认是true代表监听竖直方向touch
      target: scroller, //运动的对象
      property: "translateY",  //被滚动的属性
      value: 0,
      min: window.innerHeight - $(element).offsetHeight - 90, //不必需,滚动属性的最小值
      max: 0, //不必需,滚动属性的最大值
      change: function (value) {
        pull_refresh.translateY = value;
      },
      touchMove: function (evt, value) {
        if (value > 70) { // 提示释放刷新
          $('.pull').style.display = 'none'
          $('.release').style.display = 'flex'
        }
      },
      touchEnd: function (evt, value) {
        $('.pull').style.display = 'none'
        $('.release').style.display = 'none'
        if (value > 70) {
          $('.loading').style.display = 'flex'
          this.to(60);
          mockRequest(this);
          return false;
        } else {
          $('.pull').style.display = 'flex'
        }
      }
    })
    function mockRequest(at) {
      setTimeout(function () {
        $('.loading').style.display = 'none'
        $('.pull').style.display = 'flex'
        pull_refresh.translateY = 0;
        at.to(at.value);
      }, 2000);
    }
  }
  render() {
    return <div className='mobaile-pull-refresh'>
      <div className="pull_refresh" id="pull_refresh">
        <div className="pull">
          <span className='refresh-loadding'>
            <i className='iconfont icon-shuaxin1111'></i>
          </span>
        </div>
        <div className="release" style={{display: 'none'}}>
          <span className='refresh-loadding'>
            <i className='iconfont icon-shuaxin1111'></i>
          </span>
        </div>
        <div className="loading" style={{display: 'none'}}>
          <span className='animation-loadding'>
            <i className='iconfont icon-Loading-'></i>
          </span>
        </div>
      </div>
      <div id="wrapper">
        <div id="scroller">
          {this.props.children}
        </div>
      </div>
    </div>
  }
}
export { PullRefresh }