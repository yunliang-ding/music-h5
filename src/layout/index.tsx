import * as React from "react"
import { observer, inject } from 'mobx-react'
import { PullRefresh } from '../mobile/pullRefresh/index'
import { Header } from '../components/header/index';
import { Footer } from '../components/footer/index';
import { Home } from '../components/home/index'
import { Discovery } from '../components/discovery/index'
import { Towns } from '../components/towns/index'
import { Video } from '../components/video/index'
import './index.less'
const Window: any = window
const { Swiper } = Window
const $: any = document.querySelector.bind(document)
@inject('UI', 'Header')
@observer
class Layout extends React.Component<any, any> {
  props: any;
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {
      setMenuSelect
    } = this.props.Header
    new Swiper('.layout-swiper-container', {
      hashNavigation: {
        watchState: true,
      },
      on:{
        slideChangeTransitionStart: function(){
          setMenuSelect(this.activeIndex)
        },
        slideChangeTransitionEnd: function(){
          // 页面定位到顶部
          $('#scroller').translateY = 0
          $('#pull_refresh').translateY = 0
        }
      }
    })
  }
  render() {
    return <div className='app-layout'>
      <div className='app-layout-header'>
        <Header />
      </div>
      <PullRefresh element={`.app-${location.hash === '' ? 'home' : location.hash.substr(1)}`}>
        <div className='app-layout-content'>
          <div className="layout-swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide" data-hash="home">
                <Home />
              </div>
              <div className="swiper-slide" data-hash="discovery">
                <Discovery />
              </div>
              <div className="swiper-slide" data-hash="towns">
                <Towns />
              </div>
              <div className="swiper-slide" data-hash="video">
                <Video />
              </div>
            </div>
          </div>
        </div>
      </PullRefresh>
      <div className='app-layout-footer'>
        <Footer />
      </div>
    </div>
  }
}
export { Layout }