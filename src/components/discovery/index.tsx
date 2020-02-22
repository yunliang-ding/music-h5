import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Div1 } from './div1'
import { Div2 } from './div2'
import { Div3 } from './div3'
import { Div4 } from './div4'
import { Div5 } from './div5'
import './index.less'
@inject('UI')
@observer
class DiscoveryBody extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-discovery-body'>
      <Div1 />
      <Div2 />
      <Div3 title='推荐歌单' subtitle='为您精挑细选' />
      <Div4 title='风格推荐' subtitle='不可错过的英文' />
      <Div3 title='语音直播' subtitle='你喜欢的声音这里都有' />
      <Div4 title='2月22日' subtitle='新歌 | 新碟' />
      <Div4 title='大家都在听' subtitle='80后青春纪念册' />
      <Div3 title='电台推荐' subtitle='你喜欢的音乐故事' />
      <Div5 />
    </div>
  }
}
export { DiscoveryBody }