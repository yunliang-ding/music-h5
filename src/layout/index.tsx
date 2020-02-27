import * as React from "react"
import { observer, inject } from 'mobx-react'
import { PullRefresh } from '../mobile'
import { Header } from '../components/header/index';
import { Footer } from '../components/footer/index';
import { Home } from '../components/home/index'
import { Discovery } from '../components/discovery/index'
import { Towns } from '../components/towns/index'
import { Video } from '../components/video/index'
import { Album } from '../components/album/index'
import { Playlist } from '../components/playlist/index'
import './index.less'
const $:any = document.querySelector.bind(document)
const Window: any = window
const { Swiper } = Window
const hashMapping = {
  '#/home': 'home',
  '#/discovery': 'discovery',
  '#/towns': 'towns',
  '#/video': 'video',
  '#/album': 'album-div1',
  '#/playlist': 'playlist-div1'
}
@inject('UI', 'Header')
@observer
class Layout extends React.Component<any, any> {
  props: any;
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {
      setMenuSelect,
      router
    } = this.props.Header
    Window.mySwiper = new Swiper('.layout-swiper-container', {
      hashNavigation: {
        watchState: true,
      },
      on: {
        touchStart: function(){
          if(this.activeIndex === 3 ){ // 最多切换到第4张slide
            Window.mySwiper.allowSlideNext= false
          } else if(this.activeIndex > 3) { // 左右都不能切换
            Window.mySwiper.allowSlideNext = false
            Window.mySwiper.allowSlidePrev = false
          } else { // 随便切换
            Window.mySwiper.allowSlideNext= true
            Window.mySwiper.allowSlidePrev= true
          }
        },
        slideChangeTransitionStart: function () {
          setMenuSelect(this.activeIndex)
        },
        slideChangeTransitionEnd: function () {
          $('.app-discovery').scrollTop = 0
          $('.app-header').classList.remove('app-header-shadow')
        }
      }
    })
  }
  render() {
    const hash = hashMapping[location.hash]
    return <div className='app-layout'>
      <div className='app-layout-header'>
        <Header />
      </div>
      <div className='app-layout-content'>
        <PullRefresh element={`.app-${hash}`}>
          <div className="layout-swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-hash="/home">
                <Home />
              </div>
              <div className="swiper-slide" data-hash="/discovery">
                <Discovery />
              </div>
              <div className="swiper-slide" data-hash="/towns">
                <Towns />
              </div>
              <div className="swiper-slide" data-hash="/video">
                <Video />
              </div>
              <div className="swiper-slide" data-hash="/album">
                <Album />
              </div>
              <div className="swiper-slide" data-hash="/playlist">
                <Playlist />
              </div>
            </div>
          </div>
        </PullRefresh>
      </div>
      <div className='app-layout-footer'>
        <Footer />
      </div>
    </div>
  }
}
export { Layout }