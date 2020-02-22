import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Header } from '../components/header/index';
import { Footer } from '../components/footer/index';
import { Discovery } from '../pages/discovery/index'
const Window: any = window
const { Swiper } = Window
import './index.less'
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
        slideChangeTransitionEnd: function(){
          setMenuSelect(this.activeIndex)
        }
      }
    })
  }
  render() {
    return <div className='app-layout'>
      <div className='app-layout-header'>
        <Header />
      </div>
      <div className='app-layout-content'>
        <div className="layout-swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide" data-hash="home">
              home
            </div>
            <div className="swiper-slide" data-hash="discovery">
              <Discovery />
            </div>
            <div className="swiper-slide" data-hash="towns">
              towns
            </div>
            <div className="swiper-slide" data-hash="video">
              video
            </div>
          </div>
        </div>
      </div>
      <div className='app-layout-footer'>
        <Footer />
      </div>
    </div>
  }
}
export { Layout }