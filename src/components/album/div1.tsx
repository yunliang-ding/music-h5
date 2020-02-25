import * as React from "react"
class Div1 extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-album-div1'>
      <img id='app-album-div1-img' src='http://p1.music.126.net/7D-Dvbm6UJhR1Z931olS5w==/109951164610653344.jpg?param=600y600' />
      <div className='app-album-div1-header'>
        <i className='iconfont icon-back' onClick={
          () => {
            window.location.hash = '/discovery'
          }
        }/>
        <span>每日推荐</span>
      </div>
      <div className='app-album-div1-tag'>
        <span className='app-album-div1-tag-day'>25</span>
        <span className='app-album-div1-tag-month'>/02</span>
      </div>
    </div>
  }
}
export { Div1 }