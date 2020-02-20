import { observable, action} from 'mobx'
class UI{
  @observable loading = false
  @action setLoading = (loading: boolean): void => {
    this.loading = loading
  }
}
const ui = new UI()
export {
  ui
}