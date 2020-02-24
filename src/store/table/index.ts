import { observable, action, runInAction } from 'mobx'
import { get } from '../../axios/api'
class Table {
  @observable recommendSong = [] // 每日推荐歌曲
  @action queryRecommendSong = async () => {
    const { code, recommend } = await get('/api/recommend/songs', {})
    if(code == 200){
      runInAction(() => {
        this.recommendSong = recommend
      })
    }
  }
}
const table = new Table()
export {
  table
}