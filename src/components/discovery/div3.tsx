import * as React from "react"
import { observer, inject } from 'mobx-react'
const Window: any = window
const { Swiper } = Window
@inject('UI', 'Discovery')
@observer
class Div3 extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidUpdate() {
    new Swiper('.' + this.props.className, {
      slidesPerView: 3.2,
      spaceBetween: 10
    })
  }
  render() {
    const {
      data,
      className
    } = this.props
    return <div className='app-discovery-div3'>
      <div className='app-discovery-songlist-title'>
        {this.props.title}
        </div>
      <div className='app-discovery-songlist-tips'>
        <span>{this.props.subtitle}</span>
        <button>查看更多</button>
      </div>
      <div className={"swiper-container2 " + className}>
        <div className="swiper-wrapper">
          {
            data && data.map(item=>{
              return <div className="swiper-slide" key={item.id}>
                <img src={item.picUrl + '?param=600y600'} />
                <span>{item.copywriter}</span>
              </div>
            })
          }
        </div>
      </div>
    </div>
  }
}
export { Div3 }