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
const hahsMapping = {
  '#/home': 'home',
  '#/discovery': 'discovery',
  '#/towns': 'towns',
  '#/video': 'video'
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
    new Swiper('.layout-swiper-container', {
      hashNavigation: {
        watchState: true,
      },
      on:{
        slideChangeTransitionStart: function(){
          setMenuSelect(this.activeIndex)
        },
        slideChangeTransitionEnd: function(){
          
        }
      }
    })
  }
  render() {
    return <PullRefresh element={`.app-${hahsMapping[location.hash]}-div1`}>
      <div className='app-layout'>
        <div className='app-layout-header'>
          <Header />
        </div>
          <div className='app-layout-content'>
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
              </div>
            </div>
          </div>
        
        <div className='app-layout-footer'>
          <Footer />
        </div>
      </div>
    </PullRefresh>
  }
}
export { Layout }