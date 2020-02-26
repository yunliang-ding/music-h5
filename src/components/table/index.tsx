import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Loading } from '../../mobile'
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
      data
    } = this.props
    const {
      playSong
    } = this.props.Song
    return data.length > 0 ? <div className='app-table'>
      <div className='app-table-list'>
        {
          data.map(item => {
            return <div className='app-table-list-item' key={item.id} onClick={
              () => {
                playSong(item.id)
              }
            }>
              <div className='app-table-list-item-left'>
                <img src={item.album.picUrl + '?param=100y100'} />
              </div>
              <div className='app-table-list-item-center'>
                <div className='app-table-list-item-center-left'>
                  <div className='app-table-list-item-center-name'>
                    {item.name}
                  </div>
                  <div className='app-table-list-item-center-artists'>
                    {
                      item.artists.map(_item => { return _item.name }).join('/')
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
    </div> : <Loading style={{width: '100%', height: '100%'}} message='拼命加载中..' />
  }
}
export { Table }