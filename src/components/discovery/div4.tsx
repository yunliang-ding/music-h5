import * as React from "react"
import { observer, inject } from 'mobx-react'
const Window: any = window
const { Swiper } = Window
const songs = [{
  key: Math.random(),
  song: [{
    key: Math.random(),
    img: 'http://p1.music.126.net/VeQulVKd8-Gxv9sRWwm7GA==/109951163913688435.jpg?param=300y300',
    name: 'Feels Good',
    songer: 'Jay Made',
    info: '火遍全网的魔性舞曲 你值得拥有'
  }, {
    key: Math.random(),
    img: 'http://p1.music.126.net/0w2Go23MWqHXNXz9cu979g==/109951163402234422.jpg?param=300y300',
    name: 'Youre The One',
    songer: 'Matthew Steeper',
    info: '火遍全网的魔性舞曲 你值得拥有'
  }, {
    key: Math.random(),
    img: 'http://p2.music.126.net/QH15IquxfHRJMkj7Dyoftg==/109951163529969986.jpg?param=300y300',
    name: 'in Flames',
    songer: 'Destineak',
    info: '火遍全网的魔性舞曲 你值得拥有'
  }]
}, {
  key: Math.random(),
  song: [{
    key: Math.random(),
    img: 'http://p1.music.126.net/VeQulVKd8-Gxv9sRWwm7GA==/109951163913688435.jpg?param=300y300',
    name: 'Feels Good',
    songer: 'Jay Made',
    info: '火遍全网的魔性舞曲 你值得拥有'
  }, {
    key: Math.random(),
    img: 'http://p2.music.126.net/BRtZrqL9HFbgfRfs-LfrCg==/109951163583906158.jpg?param=300y300',
    name: 'Youre The One',
    songer: 'Matthew Steeper',
    info: '火遍全网的魔性舞曲 你值得拥有'
  }, {
    key: Math.random(),
    img: 'http://p2.music.126.net/QH15IquxfHRJMkj7Dyoftg==/109951163529969986.jpg?param=300y300',
    name: 'in Flames',
    songer: 'Destineak',
    info: '火遍全网的魔性舞曲 你值得拥有'
  }]
}, {
  key: Math.random(),
  song: [{
    key: Math.random(),
    img: 'http://p1.music.126.net/VeQulVKd8-Gxv9sRWwm7GA==/109951163913688435.jpg?param=300y300',
    name: 'Feels Good',
    songer: 'Jay Made',
    info: '火遍全网的魔性舞曲 你值得拥有'
  }, {
    key: Math.random(),
    img: 'http://p2.music.126.net/BRtZrqL9HFbgfRfs-LfrCg==/109951163583906158.jpg?param=300y300',
    name: 'Youre The One',
    songer: 'Matthew Steeper',
    info: '火遍全网的魔性舞曲 你值得拥有'
  }, {
    key: Math.random(),
    img: 'http://p2.music.126.net/QH15IquxfHRJMkj7Dyoftg==/109951163529969986.jpg?param=300y300',
    name: 'in Flames',
    songer: 'Destineak',
    info: '火遍全网的魔性舞曲 你值得拥有'
  }]
}]
@inject('UI')
@observer
class Div4 extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    new Swiper('.swiper-container3', {

    })
  }
  render() {
    return <div className='app-discovery-body-div4'>
      <div className='app-discovery-body-div4-title'>
        {this.props.title}
      </div>
      <div className='app-discovery-body-div4-tips'>
        <span>{this.props.subtitle}</span>
        <button>播放全部</button>
      </div>
      <div className="swiper-container3">
        <div className="swiper-wrapper">
          {
            songs.map(_item => {
              return <div className="swiper-slide" key={_item.key}>
                {
                  _item.song.map(_song => {
                    return <div className="discovery-song" key={_item.key}>
                      <div className='discovery-song-left'>
                        <img src={_song.img} />
                      </div>
                      <div className='discovery-song-center'>
                        <span className='discovery-song-name'>
                          {_song.name}
                          <span className='discovery-song-songer'>-{_song.songer}</span>
                        </span>
                        <span className='discovery-song-info'>{_song.info}</span>
                      </div>
                      <div className='discovery-song-right'>
                        <i className='iconfont icon-bofang1'></i>
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