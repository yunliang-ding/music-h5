import * as React from "react"
import { observer, inject } from 'mobx-react'
const Window: any = window
const { Swiper } = Window
@inject('UI')
@observer
class Div1 extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    new Swiper('.swiper-container1', {
      loop: true,
      autoplay: true
    })
  }
  render() {
    return <div className='app-discovery-body-div1'>
      <div className="swiper-container1">
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
      </div>
    </div>
  }
}
export { Div1 }