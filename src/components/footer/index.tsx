import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Audio } from './audio'
import { Progress } from '../../mobile'
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
      },
      setSongByKey
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
        <Progress progress={progress/dt * 100 * 3.6} style={{
          width: 30,
          height: 30
        }}>
          <i className={playing ? 'iconfont bf icon-zantingxianxing' : 'iconfont bf icon-bofang3'} onClick={
            () => {
              setSongByKey('playing', !playing)
            }
          }></i>
        </Progress>
        <i className='iconfont icon-cebianlan'></i>
      </div>
      <Audio playing={playing} />
    </div>
  }
}
export { Footer }