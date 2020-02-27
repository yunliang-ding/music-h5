import * as React from "react"
import { Table } from '../table/index'
import { observer, inject } from 'mobx-react'
const $:any = document.querySelector.bind(document)
@inject('UI', 'Table')
@observer
class Div2 extends React.Component<any, any> {
  props: any
  start:any
  end:any
tableHeight: number
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.Table.queryRecommendSong()
    $('.app-album-div1-tag').style.bottom = 40
    $('.app-album-div2').style.top = -20
    this.tableHeight = Number.parseInt(window.getComputedStyle($('.app-album-div2-body')).height)
  }
  render() {
    const {
      recommendSong
    } = this.props.Table
    return <div className='app-album-div2'>
      <div className='app-album-div2-header'>
        <div className='app-album-div2-header-left'>
          <i className='iconfont icon-bofang2'></i>
          <span>播放全部</span>
        </div>
        <div className='app-album-div2-header-right'>
          <i className='iconfont icon-item'></i>
          <span>多选</span>
        </div>
      </div>
      <div className='app-album-div2-body' onTouchStart = {
        (e) => {
          let touch = e.targetTouches[0];
          this.start = touch.pageY
        }
      } onTouchMove = {
        (e) => {
          if(e.targetTouches.length > 0){
            console.log()
            this.end = e.touches[0].pageY - this.start
            if( this.end < 0 ){ // 上滑
              $('.app-album-div1-tag').style.bottom = 110
              $('.app-album-div2').style.top = -90
              $('.app-album-div2-body').style.height = this.tableHeight + 90 
            } else { // 下拉
              $('.app-album-div1-tag').style.bottom = 40
              $('.app-album-div2').style.top = -20
              $('.app-album-div2-body').style.height = 'calc(100% - 45px)'
            }
          }
        }
      }>
        <Table data={recommendSong} />
      </div>
    </div>
  }
}
export { Div2 }