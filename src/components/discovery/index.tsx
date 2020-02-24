import * as React from "react"
import { toJS } from 'mobx'
import { observer, inject } from 'mobx-react'
import { Div1 } from './div1'
import { Div2 } from './div2'
import { Div3 } from './div3'
import { Div4 } from './div4'
import { Div5 } from './div5'
import './index.less'
@inject('UI', 'Discovery')
@observer
class Discovery extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.Discovery.queryPersonalized() // 推荐歌单
    this.props.Discovery.queryRecommendResource() // 每日推荐新歌
    this.props.Discovery.queryNewsong() // 推荐新歌
    this.props.Discovery.queryDjprogram() // 推荐电台
    this.props.Discovery.queryNewestAlbum() //最新专辑
  }
  render() {
    const {
      personalized,
      newsong,
      recommend,
      djprogram,
      newestAlbum
    } = this.props.Discovery
    return <div className='app-discovery'>
      <Div1 />
      <Div2 />
      <Div3 title='推荐歌单' subtitle='为您精挑细选' data={toJS(recommend)} className='discovery-swipe1' />
      <Div4 title='风格推荐' subtitle='最新歌曲' data={toJS(newsong)} className='discovery-swipe2' />
      <Div3 title='语音直播' subtitle='你喜欢的声音这里都有' data={toJS(personalized)}  className='discovery-swipe3' />
      <Div4 title='大家都在听' subtitle='80后青春纪念册' data={toJS(newsong)} className='discovery-swipe4' />
      <Div3 title='2月22日' subtitle='最新专辑' data={toJS(newestAlbum)} className='discovery-swipe5' />
      <Div3 title='电台推荐' subtitle='你喜欢的音乐故事' data={toJS(djprogram)}  className='discovery-swipe6' />
      <Div5 />
    </div>
  }
}
export { Discovery }