import * as React from "react"
import { observer, inject } from 'mobx-react'
@inject('UI')
@observer
class Div2 extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-discovery-div2'>
      <div className='app-discovery-menus-item'>
        <div className='app-discovery-menus-item-logo' onClick={
          () => {
            window.location.hash = '/album'
          }
        }>
          <i className='iconfont icon-rili1' style={{ fontSize: 28 }}></i>
          <span>22</span>
        </div>
        <span>每日推荐</span>
      </div>
      <div className='app-discovery-menus-item'>
        <div className='app-discovery-menus-item-logo'>
          <i className='iconfont icon-gedan1' style={{ fontSize: 30 }}></i>
        </div>
        <span>歌单</span>
      </div>
      <div className='app-discovery-menus-item'>
        <div className='app-discovery-menus-item-logo'>
          <i className='iconfont icon-paixingbang' style={{ fontSize: 22 }}></i>
        </div>
        <span>配行榜</span>
      </div>
      <div className='app-discovery-menus-item'>
        <div className='app-discovery-menus-item-logo'>
          <i className='iconfont icon-diantai' style={{ fontSize: 24 }}></i>
        </div>
        <span>电台</span>
      </div>
      <div className='app-discovery-menus-item'>
        <div className='app-discovery-menus-item-logo'>
          <i className='iconfont icon-zhibo' style={{ fontSize: 26 }}></i>
        </div>
        <span>直播</span>
      </div>
    </div>
  }
}
export { Div2 }