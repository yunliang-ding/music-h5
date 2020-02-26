import * as React from "react"
import { Table } from '../table/index'
import { observer, inject } from 'mobx-react'
import { Loading } from '../../mobile'
@inject('UI', 'Table')
@observer
class Div2 extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.Table.queryRecommendSong()
  }
  render() {
    const {
      recommendSong
    } = this.props.Table
    return recommendSong.length > 0 ? <div className='app-album-div2'>
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
      <div className='app-album-div2-body'>
        <Table data={recommendSong} />
      </div>
    </div> : <Loading style={{width: '100%', height: '100%'}} message='拼命加载中..' />
  }
}
export { Div2 }