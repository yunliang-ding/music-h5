import * as React from "react"
import { ActionSheet } from '../../mobile/actionSheet/index'
const data = [
  {
    "trackCount": 104,
    "coverImgUrl": "https://p2.music.126.net/O0Ambd5Gzk81UzTvsdZyUw==/109951163624921185.jpg",
    "name": "音乐不是我的全部喜欢的音乐",
    "id": 324301620,
  },
  {
    "trackCount": 53,
    "coverImgUrl": "https://p2.music.126.net/bUy0WitJLbrlk5vK-WbbNA==/18690598161109437.jpg",
    "name": "禅意电子｜静如处子动若脱兔",
    "id": 479389697
  }
]
class Div4 extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  state = {
    activeBar: 1,
    actionSheetShow: false
  };
  setActiveBar = (activeBar: number) => {
    this.setState({
      activeBar
    })
  }
  render() {
    const { activeBar, actionSheetShow } = this.state
    return <div className='app-home-div4'>
      <div className='app-home-div4-tabs'>
        <div
          className={activeBar === 1 ? 'app-home-div4-tab app-home-div4-tab-active' : 'app-home-div4-tab'}
          onClick={
            () => {
              this.setActiveBar(1)
            }
          }
        >
          创建歌单<sub>2</sub>
        </div>
        <div
          className={activeBar === 2 ? 'app-home-div4-tab app-home-div4-tab-active' : 'app-home-div4-tab'}
          onClick={
            () => {
              this.setActiveBar(2)
            }
          }
        >
          收藏歌单<sub>2</sub>
        </div>
        <i className='iconfont icon-gengduo-copy' onClick={
          () => {
            this.setState({
              actionSheetShow:true
            })
          }
        }></i>
      </div>
      <div className='app-home-div4-list'>
        {
          data.map(_item => {
            return <div className='app-home-div4-list-item' key={_item.id}>
              <div className='app-home-div4-list-item-left'>
                <img src={_item.coverImgUrl} />
              </div>
              <div className='app-home-div4-list-item-center'>
                <span className='app-home-div4-list-item-center-name'>{_item.name}</span>
                <span className='app-home-div4-list-item-center-info'>{_item.trackCount}首</span>
              </div>
              <div className='app-home-div4-list-item-right'>
                <i className='iconfont icon-gengduo-copy'></i>
              </div>
            </div>
          })
        }
      </div>
      <ActionSheet show={actionSheetShow} menus={
        [{
          key: Math.random(),
          label: '创建新歌单',
          icon: <i className='iconfont icon-jia' style={{color:'#5c5c5c', fontSize:20}}></i>,
          click:(e) => {
            console.log(e)
          }
        },{
          key: Math.random(),
          label: '歌单管理',
          icon: <i className='iconfont icon-guanli' style={{color:'#5c5c5c', fontSize:22}}></i>,
          click:(e) => {
            console.log(e)
          }
        }]
      } />
    </div>
  }
}
export { Div4 }