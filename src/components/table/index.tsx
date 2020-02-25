import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('UI')
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
    return <div className='app-table'>
      <div className='app-table-list'>
        {
          data.map(item => {
            return <div className='app-table-list-item' key={item.id}>
              <div className='app-table-list-item-left'>
                <img src={item.album.picUrl + '?param=300y300'} />
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
    </div>
  }
}
export { Table }