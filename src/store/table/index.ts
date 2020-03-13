import { observable, action, runInAction } from 'mobx'
import { get } from '../../axios/api'
import { Toast } from '../../mobile'
class Table {
  @observable recommendSong = [] // 每日推荐歌曲
  @action queryRecommendSong = async () => {
    Toast.show('加载中')
    const { code, recommend } = await get('/api/recommend/songs', {})
    Toast.close() 
    if(code == 200){
      runInAction(() => {
        this.recommendSong = recommend
      })
    }
  }
  @observable playlist = { // 歌单详情
    name: '',
    data: [],
    creator: {
      avatarUrl: '',
      name: ''
    },
    coverImgUrl: '',
    description: '',
    shareCount: 0
  }
  @action queryPlaylist = async (id:string) => {
    Toast.show('加载中')
    const { code, playlist } = await get('/api/playlist/detail', {
      id
    })
    Toast.close() 
    if(code == 200){
      runInAction(() => {
        this.playlist = {
          name: playlist.name,
          data: playlist.tracks.map(song=>{
            song.album = song.al
            song.artists = song.ar
            return song
          }),
          creator: playlist.creator || {
            avatarUrl: '',
            name: ''
          },
          coverImgUrl: playlist.coverImgUrl,
          description: playlist.description,
          shareCount: playlist.shareCount
        }
      })
    }
  }
}
const table = new Table()
export {
  table
}