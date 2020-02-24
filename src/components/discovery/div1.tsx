import * as React from "react"
import { observer, inject } from 'mobx-react'
const Window: any = window
const { Swiper } = Window
@inject('UI', 'Discovery')
@observer
class Div1 extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  queryBanner = async () => {
    await this.props.Discovery.queryBanner()
    new Swiper('.swiper-container1', {
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })
  }
  componentDidMount() {
    this.queryBanner()
  }
  render() {
    const {
      banners
    } = this.props.Discovery
    return <div className='app-discovery-div1'>
      <div className="swiper-container1">
        <div className="swiper-wrapper">
          {
            banners.map(banner=>{
              return <div className="swiper-slide" key={banner.targetId}>
                <img src={banner.pic} />
                <span className='tips'>{banner.typeTitle}</span>
              </div>
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  }
}
export { Div1 }