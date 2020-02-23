import * as React from "react"
import { observer, inject } from 'mobx-react'
const Window: any = window
const { Swiper } = Window
@inject('UI')
@observer
class Div3 extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    new Swiper('.app-home-swiper-container1', {
      slidesPerView: 3,
      spaceBetween: 10
    })
  }
  render() {
    return <div className='app-home-div3'>
      <div className='app-home-div3-title'>
        <div className='app-home-div3-title-left'>
          我的音乐
        </div>
        <div className='app-home-div3-title-right'>
          <i className='iconfont icon-you'></i>
        </div>
      </div>
      <div className='app-home-swiper-container1'>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src='http://p1.music.126.net/SbC8FdLw-PywMmnD35iRKg==/109951164725561024.jpg?param=1000y1000' />
            <div className='swipe-message'>
              <i className='iconfont icon-icon_huabanfuben' style={{color: 'var(--theme-color)', fontSize:26}}></i>
              <span>
                我喜欢的音乐
              </span>
            </div>
          </div>
          <div className="swiper-slide">
            <img src='http://p2.music.126.net/hsJ_i6lOWwsBU_3r-j0i9Q==/109951164239520119.jpg?param=1000y1000' />
            <div className='swipe-message'>
              <i className='iconfont icon-leguansirendiantai' style={{fontSize:36}}></i>
              <span style={{position:'relative', top: -8}}>私人FM</span>
            </div>
          </div>
          <div className="swiper-slide">
            <img src='http://p1.music.126.net/SbC8FdLw-PywMmnD35iRKg==/109951164725561024.jpg?param=1000y1000' />
            <div className='swipe-message'>
              <i className='iconfont icon-anengliang'></i>
              <span>云村正能量</span>
            </div>
          </div>
          <div className="swiper-slide">
            <img src='http://p2.music.126.net/fqYWuUrCBUwQ8kPHOEOZ1g==/109951163002904769.jpg?param=1000y1000' />
            <div className='swipe-message'>
              <i className='iconfont icon-dianyin'></i>
              <span>最嗨电音</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}
export { Div3 }