import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
const Window: any = window
const { Swiper } = Window
@inject('UI')
@observer
class DiscoveryBody extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    new Swiper('.swiper-container', {
      loop : true,
      autoplay:true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
    new Swiper('.swiper-container2', {
      slidesPerView : 3.2,
      spaceBetween : 10
    })
  }
  render() {
    return <div className='app-discovery-body'>
      <div className='app-discovery-body-header'>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src='http://p1.music.126.net/SbC8FdLw-PywMmnD35iRKg==/109951164725561024.jpg?param=1000y1000' />
              <span className='tips'>独家</span>
            </div>
            <div className="swiper-slide">
              <img src='http://p2.music.126.net/fqYWuUrCBUwQ8kPHOEOZ1g==/109951163002904769.jpg?param=1000y1000' />
              <span className='tips'>独家</span>
            </div>
            <div className="swiper-slide">
              <img src='http://p2.music.126.net/hsJ_i6lOWwsBU_3r-j0i9Q==/109951164239520119.jpg?param=1000y1000' />
              <span className='tips'>独家</span>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <div className='app-discovery-body-menus'>
        <div className='app-discovery-body-menus-item'>
          <div className='app-discovery-body-menus-item-logo'>
            <i className='iconfont icon-rili1' style={{fontSize: 28}}></i>
            <span>22</span>
          </div>
          <span>每日推荐</span>
        </div>
        <div className='app-discovery-body-menus-item'>
          <div className='app-discovery-body-menus-item-logo'>
            <i className='iconfont icon-gedan1' style={{fontSize: 30}}></i>
          </div>
          <span>歌单</span>
        </div>
        <div className='app-discovery-body-menus-item'>
          <div className='app-discovery-body-menus-item-logo'>
            <i className='iconfont icon-paixingbang' style={{fontSize: 22}}></i>
          </div>
          <span>配行榜</span>
        </div>
        <div className='app-discovery-body-menus-item'>
          <div className='app-discovery-body-menus-item-logo'>
            <i className='iconfont icon-diantai' style={{fontSize: 24}}></i>
          </div>
          <span>电台</span>
        </div>
        <div className='app-discovery-body-menus-item'>
          <div className='app-discovery-body-menus-item-logo'>
            <i className='iconfont icon-zhibo' style={{fontSize: 26}}></i>
          </div>
          <span>直播</span>
        </div>
      </div>
      <div className='app-discovery-body-songlist'>
        <div className='app-discovery-body-songlist-title'>
          推荐歌单
        </div>
          <div className='app-discovery-body-songlist-tips'>
          <span>为您精挑细选</span>
          <button>查看更多</button>
        </div>
        <div className="swiper-container2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src='http://p1.music.126.net/SbC8FdLw-PywMmnD35iRKg==/109951164725561024.jpg?param=1000y1000' />
              <span>为您精挑细选为您精挑细选为您精挑细选为您精挑细选为您精挑细选为您精挑细选</span>
            </div>
            <div className="swiper-slide">
              <img src='http://p2.music.126.net/fqYWuUrCBUwQ8kPHOEOZ1g==/109951163002904769.jpg?param=1000y1000' />
              <span>为您精挑细选为您精挑细选为您精挑细选</span>
            </div>
            <div className="swiper-slide">
              <img src='http://p2.music.126.net/hsJ_i6lOWwsBU_3r-j0i9Q==/109951164239520119.jpg?param=1000y1000' />
              <span>为您精挑细选为您精挑细选为您精挑细选</span>
            </div>
            <div className="swiper-slide">
              <img src='http://p1.music.126.net/SbC8FdLw-PywMmnD35iRKg==/109951164725561024.jpg?param=1000y1000' />
              <span>为您精挑细选为您精挑细选为您精挑细选</span>
            </div>
            <div className="swiper-slide">
              <img src='http://p2.music.126.net/fqYWuUrCBUwQ8kPHOEOZ1g==/109951163002904769.jpg?param=1000y1000' />
              <span>为您精挑细选为您精挑细选为您精挑细选</span>
            </div>
            <div className="swiper-slide">
              <img src='http://p2.music.126.net/hsJ_i6lOWwsBU_3r-j0i9Q==/109951164239520119.jpg?param=1000y1000' />
              <span>为您精挑细选为您精挑细选为您精挑细选</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export { DiscoveryBody }