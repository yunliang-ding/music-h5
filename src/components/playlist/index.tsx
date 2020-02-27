import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Div1 } from './div1'
import { Div2 } from './div2'
import './index.less'
@inject('UI', 'Table')
@observer
class Playlist extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    if(this.props.Table.playlist.data.length === 0 && localStorage.getItem('playlistId')){
      this.props.Table.queryPlaylist(localStorage.getItem('playlistId'))
    } 
  }
  render() {
    const {
      playlist:{
        name,
        creator,
        description,
        coverImgUrl,
        data,
        shareCount
      }
    } = this.props.Table
    return <div className='app-playlist'>
      <div className='app-playlist-body'>
        <Div1 name={name} coverImgUrl={coverImgUrl} description={description} creator={creator} />
        <Div2 data={data} shareCount={shareCount} />
      </div>
    </div>
  }
}
export { Playlist }