import * as React from "react"
class Div2 extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-home-div2'>
      <div className='app-home-div2-menu'>
        <div className='app-home-div2-menu-tab'>
          <i className='iconfont icon-yinle'></i>
          <span>本地音乐</span>
        </div>
         <div className='app-home-div2-menu-tab'>
          <i className='iconfont icon-xiazai'></i>
          <span>下载管理</span>
        </div>
         <div className='app-home-div2-menu-tab'>
          <i className='iconfont icon-diantai'></i>
          <span>我的电台</span>
        </div>
         <div className='app-home-div2-menu-tab'>
          <i className='iconfont icon-shoucang'></i>
          <span>我的收藏</span>
        </div>
         <div className='app-home-div2-menu-tab'>
          <i className='iconfont icon-xinge'></i>
          <span>关注新歌</span>
        </div>
      </div>
    </div>
  }
}
export { Div2 }