import * as React from "react"
class Div1 extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  render() {
    const {
      name,
      creator,
      description,
      coverImgUrl
    } = this.props
    return <div className='app-playlist-div1'>
      { coverImgUrl && <img src={coverImgUrl + '?param=300y300'} className='app-playlist-div1-back'/> }
      <div className='app-playlist-div1-wapper'>
        <div className='app-playlist-div1-wapper-top'>
          <div className='app-playlist-div1-wapper-left'>
            { coverImgUrl && <img src={coverImgUrl} /> }
          </div>
          <div className='app-playlist-div1-wapper-right'>
            <div className='app-playlist-div1-wapper-right-name'>
              {
                name
              }
            </div>
            <div className='app-playlist-div1-wapper-right-creater'>
              { creator.avatarUrl && <img src={creator.avatarUrl + '?param=100y100'} /> }
              { creator.nickname && <span>{creator.nickname}</span> }
              { creator.nickname && <i className='iconfont icon-you'></i> }
            </div>
            <div className='app-playlist-div1-wapper-right-desc'>
              {
                description
              }
            </div>
          </div>
        </div>
        <div className='app-playlist-div1-wapper-bottom'>
          <div>
            <i className='iconfont icon-pinglun'></i>
            <span>221</span>
          </div>
          <div>
            <i className='iconfont icon-fenxiang'></i>
            <span>297</span>
          </div>
          <div>
            <i className='iconfont icon-xiazai'></i>
            <span>下载</span>
          </div>
          <div>
            <i className='iconfont icon-huaban'></i>
            <span>多选</span>
          </div>
        </div>
      </div>
    </div>
  }
}
export { Div1 }