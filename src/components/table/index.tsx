import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('UI', 'Song')
@observer
class Table extends React.Component<any, any> {
  props: any
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
    return<div className='app-table'>
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
                <i className='iconfont icon-more'></i>
              </div>
            </div>
          })
        }
      </div>
    </div>
  }
}
export { Table }