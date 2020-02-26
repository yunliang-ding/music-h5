import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('UI', 'Song')
@observer
class Footer extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const {
      song: {
        name,
        artist,
        playing,
        dt,
        url,
        picUrl,
        progress
      }
    } = this.props.Song
    return <div className='app-footer'>
      <div className='app-footer-img'>
        {picUrl ? <img src={picUrl + '?param=60y60'} /> : <i className='iconfont icon-dian'></i>}
      </div>
      <div className='app-footer-song'>
        <span className='app-footer-song-name'>{name || '...'}</span>
        <span className='app-footer-song-lyrics'>{artist || '.....'}</span>
      </div>
      <div className='app-footer-tools'>
        <i className='iconfont icon-bofang'></i>
        <i className='iconfont icon-cebianlan'></i>
      </div>
    </div>
  }
}
export { Footer }