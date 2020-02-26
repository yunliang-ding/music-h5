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
import './index.less'
const Window: any = window
const { Swiper } = Window
const hashMapping = {
  '#/home': 'home',
  '#/discovery': 'discovery',
  '#/towns': 'towns',
  '#/video': 'video',
  '#/album': 'album'
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
    let mySwiper = new Swiper('.layout-swiper-container', {
      hashNavigation: {
        watchState: true,
      },
      on: {
        touchStart: function () {
        },
        slideChangeTransitionStart: function () {
          setMenuSelect(this.activeIndex)
        },
        slideChangeTransitionEnd: function () {
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