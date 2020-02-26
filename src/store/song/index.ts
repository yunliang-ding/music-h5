import { observable, action, runInAction } from 'mobx'
import { get } from '../../axios/api'
class Song {
  @observable song = { // 当前播放歌曲
    id: '',
    name: '',
    artist: '',
    playing: false,
    dt: 0,
    url: '',
    picUrl: '',
    lyric: '',
    progress: 0,
    comment: []
  }
  @action setSong = (song) => {
    this.song.id = song.id
    this.song.name = song.name
    this.song.artist = song.ar.map(_item=>{return _item.name}).join('/')
    this.song.playing = true
    this.song.dt = song.dt
    this.song.url = song.url
    this.song.picUrl = song.al.picUrl
    this.song.lyric = ''
    this.song.progress = 0
    this.song.comment = []
  }
  @action setSongByKey = (key, value) => {
    this.song[key] = value
  }
  @action playSong = async (songId: string) => {
    const song = await this.querySongDetailById(songId)
    if(song){
      const url = await this.querySongUrlById(songId)
      song.url = url
      this.setSong(song)
    }
  }
  @action querySongDetailById = async (ids: string) => {
    const { code, songs } = await get(`/api/song/detail`, {
      ids
    })
    if (code == 200) {
      return songs[0]
    }
    return null
  }
  @action querySongUrlById = async (id: string) => {
    const { code, data } = await get(`/api/song/url`, {
      id
    })
    if (code == 200) {
      return data[0].url
    }
    return null
  }
}
const song = new Song()
export {
  song
}