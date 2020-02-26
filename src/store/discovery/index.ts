import { observable, action, runInAction } from 'mobx'
import { get } from '../../axios/api'
class Discovery {
  @observable banners = []
  @observable personalized = [] // 推荐歌单
  @observable newsong = [] // 推荐新歌
  @observable recommend = [] // 每日推荐歌单
  @observable djprogram = [] // 推荐电台
  @observable newestAlbum = [] // 最新专辑
  @action queryBanner = async () => {
    const { code, banners } = await get('/api/banner?type=2', {})
    if(code == 200){
      runInAction(() => {
        this.banners = banners
      })
    }
  }
  @action queryRecommendResource = async () => {
    const { code, recommend } = await get(`/api/recommend/resource`, {})
    if(code == 200){
      runInAction(() => {
        this.recommend = recommend
      })
    }
  }
  @action queryPersonalized = async () => {
    const { code, result } = await get(`/api/personalized?limit=6&timestamp=${new Date().getTime()}`, {})
    if(code == 200){
      runInAction(() => {
        this.personalized = result
      })
    }
  }
  @action queryNewsong = async () => {
    const { code, result } = await get(`/api/personalized/newsong?timestamp=${new Date().getTime()}`, {})
    if(code == 200){
      runInAction(() => {
        this.newsong = result
      })
    }
  }
  @action queryDjprogram = async () => {
    const { code, result } = await get(`/api/personalized/djprogram`, {})
    if(code == 200){
      runInAction(() => {
        this.djprogram = result
      })
    }
  }
  @action queryNewestAlbum = async () => {
    const { code, albums } = await get(`/api/album/newest`, {})
    if(code == 200){
      runInAction(() => {
        this.newestAlbum = albums
      })
    }
  }
}
const discovery = new Discovery()
export {
  discovery
}