import * as React from "react"
import { Table } from '../table/index'
const $:any = document.querySelector.bind(document)
class Div2 extends React.Component<any, any> {
  props: any
  start:any
  end:any
  tableHeight: number
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.tableHeight = Number.parseInt(window.getComputedStyle($('.app-playlist-div2-body')).height)
  }
  render() {
    const {
      data,
      shareCount
    } = this.props
    return <div className='app-playlist-div2'>
      <div className='app-playlist-div2-header'>
        <div className='app-playlist-div2-header-left'>
          <i className='iconfont icon-bofang2'></i>
          <span>
            播放全部
            {data.length > 0 && <sub>(共{data.length}首)</sub>}
          </span>
        </div>
        <div className='app-playlist-div2-header-right'>
          <i className='iconfont icon-jia'></i>
          <span>
            收藏({shareCount})
          </span>
        </div>
      </div>
      <div className='app-playlist-div2-body' onTouchStart = {
        (e) => {
          let touch = e.targetTouches[0];
          this.start = touch.pageY
        }
      } onTouchMove = {
        (e) => {
          if(e.targetTouches.length > 0){
            this.end = e.touches[0].pageY - this.start
            if( this.end < 0 ){ // 上滑
              $('.app-playlist-div2').style.top = -220
              $('.app-playlist-div2-body').style.height = this.tableHeight + 220 
            } else { // 下拉
              $('.app-playlist-div2').style.top = 0
              $('.app-playlist-div2-body').style.height = 'calc(100% - 45px)'
            }
          }
        }
      }>
        <Table data={data} />
      </div>
    </div>
  }
}
export { Div2 }