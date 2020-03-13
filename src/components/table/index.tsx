import * as React from "react"
import { observer, inject } from 'mobx-react'
import { ActionSheet } from '../../mobile'
import './index.less'
@inject('UI', 'Song')
@observer
class Table extends React.Component<any, any> {
  props: any
  state = {
    songId: '',
    actionSheetShow: false
  }
  constructor(props) {
    super(props)
  }
  render() {
    const {
      playSongId,
      data,
      showImg
    } = this.props
    const {
      playSong
    } = this.props.Song
    return <div className='app-table'>
      <div className='app-table-list'>
        {
          data.map((item, _index) => {
            return <div className='app-table-list-item' key={item.id} onClick={
              () => {
                playSong(item.id)
              }
            }>
              <div className='app-table-list-item-left'>
                {
                  item.id === playSongId ? <i className='iconfont icon-2'></i> :
                    showImg ? <img src={item.album.picUrl + '?param=100y100'} /> : _index + 1
                }
              </div>
              <div className='app-table-list-item-center'>
                <div className='app-table-list-item-center-left'>
                  <div className='app-table-list-item-center-name'>
                    {item.name}(<span>{item.alia}</span>)
                  </div>
                  <div className='app-table-list-item-center-artists'>
                    {
                      item.artists.map(_item => { return _item.name }).join('/')
                    }
                    {
                      item.album.name && <span>&nbsp;-&nbsp;{item.album.name}</span>
                    }
                  </div>
                </div>
                <div className='app-table-list-item-center-right'>
                </div>
              </div>
              <div className='app-table-list-item-right'>
                <i className='iconfont icon-more' onClick={
                  (e) => {
                    console.log('icon-more')
                    e.stopPropagation()
                    this.setState({
                      actionSheetShow: true,
                      songId: item.id
                    })
                  }
                }></i>
              </div>
            </div>
          })
        }
      </div>
      <ActionSheet
        close={
          () => {
            this.setState({
              actionSheetShow: false
            })
          }
        } 
        show={this.state.actionSheetShow}
        menus={
          [{
            key: Math.random(),
            label: '收藏到歌单',
            icon: <i className='iconfont icon-shoucang' style={{ color: '#5c5c5c', fontSize: 20 }}></i>,
            click: (e) => {
              console.log(e, this.state.songId)
            }
          }, {
            key: Math.random(),
            label: '添加到喜欢',
            icon: <i className='iconfont icon-xihuan' style={{ color: '#5c5c5c', fontSize: 22 }}></i>,
            click: (e) => {
              console.log(e, this.state.songId)
            }
          }, {
            key: Math.random(),
            label: '下载',
            icon: <i className='iconfont icon-xiazai' style={{ color: '#5c5c5c', fontSize: 22 }}></i>,
            click: (e) => {
              console.log(e, this.state.songId)
            }
          }]
        }
      />
    </div>
  }
}
export { Table }