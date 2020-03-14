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
  renderLyric = (lyricArray, progress) => {
    let lyric = ''
    lyricArray.map((_item, _index, _arr) => {
      let currentTime = _item.substr(_item.indexOf('[') + 1, _item.indexOf('.') - 1).split(':') || [0,0]
      let second = (Number.parseInt(currentTime[0]) * 60 + Number.parseInt(currentTime[1])) * 1000
      let nextTime = _arr[_index + 1] && _arr[_index + 1].substr(_arr[_index + 1].indexOf('[') + 1, _arr[_index + 1].indexOf('.') - 1).split(':') || [0,0]
      let secondNext = (Number.parseInt(nextTime[0]) * 60 + Number.parseInt(nextTime[1])) * 1000
      if( second <  progress && progress < secondNext ){
        lyric = _item.substr(_item.indexOf(']') + 1)
      }
    })
    return lyric
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
        progress,
        lyric
      },
      setSongByKey
    } = this.props.Song
    const lyricArray = lyric && lyric.toString().split('#*#')
    return <div className='app-footer'>
      <div className='app-footer-img'>
        {picUrl ? <img src={picUrl + '?param=60y60'} /> : <i className='iconfont icon-dian'></i>}
      </div>
      <div className='app-footer-song'>
        <span className='app-footer-song-name'>{name || '...'}</span>
        <span className='app-footer-song-lyrics'>
          {
            lyricArray && this.renderLyric(lyricArray, progress) || artist || '.....'
          }
        </span>
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