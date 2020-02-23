import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('UI')
@observer
class Footer extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    const name = "We Don't Talk Anymore"
    const lyrics = "Sky (Radio Edit)/Steerner"
    return <div className='app-footer'>
      <div className='app-footer-img'>
        <img src='http://p2.music.126.net/wbGjTXlUXfVqEZPcSciDxg==/6639950721110295.jpg?param=400y400' />
      </div>
      <div className='app-footer-song'>
        <span className='app-footer-song-name'>{name}</span>
        <span className='app-footer-song-lyrics'>{lyrics}</span>
      </div>
      <div className='app-footer-tools'>
        <i className='iconfont icon-bofang'></i>
        <i className='iconfont icon-cebianlan'></i>
      </div>
    </div>
  }
}
export { Footer }