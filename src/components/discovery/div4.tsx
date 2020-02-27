import * as React from "react"
import { observer, inject } from 'mobx-react'
const Window: any = window
const { Swiper } = Window
@inject('UI', 'Song')
@observer
class Div4 extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    new Swiper('.' + this.props.className, {})
  }
  render() {
    const {
      data,
      className
    } = this.props
    let songs = []
    songs[0] = {
      key: Math.random(),
      song: data.slice(0,3)
    }
    songs[1] = {
      key: Math.random(),
      song: data.slice(3,6)
    }
    songs[2] = {
      key: Math.random(),
      song: data.slice(6,9)
    }
    const {
      song:{
        id
      },
      playSong
    } = this.props.Song
    return <div className='app-discovery-div4'>
      <div className='app-discovery-div4-title'>
        {this.props.title}
      </div>
      <div className='app-discovery-div4-tips'>
        <span>{this.props.subtitle}</span>
        <button>播放全部</button>
      </div>
      <div className={"swiper-container3 " + className}>
        <div className="swiper-wrapper">
          {
            songs.map(_item => {
              return <div className="swiper-slide" key={_item.key}>
                {
                  _item.song.map(_song => {
                    return <div className="discovery-song" key={_item.key}>
                      <div className='discovery-song-left'>
                        <img src={_song.picUrl + '?param=300y300'} />
                      </div>
                      <div className='discovery-song-center'>
                        <span className='discovery-song-name'>
                          {_song.name}
                          <span className='discovery-song-songer'>-{_song.song.artists[0].name}</span>
                        </span>
                        <span className='discovery-song-info'>{_song.song.album.company}</span>
                      </div>
                      <div className='discovery-song-right'>
                        <i className={id === _song.id ? 'iconfont icon-2' : 'iconfont icon-bofang1'} onClick={
                          () => {
                            playSong(_song.id)
                          }
                        }></i>
                      </div>
                    </div>
                  })
                }
              </div>
            })
          }
        </div>
      </div>
    </div>
  }
}
export { Div4 }