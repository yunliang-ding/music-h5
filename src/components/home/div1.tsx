import * as React from "react"
class Div1 extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-home-div1'>
      <div className='app-home-div1'>
        <div className='app-home-div1-left'>
          <img src='https://p3.music.126.net/7D-Dvbm6UJhR1Z931olS5w==/109951164610653344.jpg' />
        </div>
        <div className='app-home-div1-center'>
          <span className='app-home-div1-center-name'>音乐不是我的全部</span>
          <span className='app-home-div1-center-level'>Lv.8</span>
        </div>
        <div className='app-home-div1-right'>
          <span>开通黑胶VIP</span>
          <i className='iconfont icon-you'></i>
        </div>
      </div>
    </div>
  }
}
export { Div1 }