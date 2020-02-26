import * as React from 'react'
import { observer, inject } from 'mobx-react'
const $ = document.querySelector.bind(document)
@inject('UI', 'Song')
@observer
class Audio extends React.Component<any, any> {
  [x: string]: any
  constructor(props) {
    super(props)
  }
  componentDidUpdate() {
    this.props.playing ? $('#audio').play() : $('#audio').pause()
  }
  componentDidMount() {
    $('#audio').ontimeupdate = (e) => {
      this.props.Song.setSongByKey('progress', e.target.currentTime * 1000)
    }
    $('#audio').onended = (e) => {
      // this.props.Song.playerNext()
    }
    $('#audio').onerror = (e) => {
    }
  }
  render() {
    const {
      song: {
        url
      }
    } = this.props.Song
    return <div style={{ display: 'none' }}>
      <video src={url} autoPlay={true} id='audio' />
    </div>
  }
}
export { Audio }