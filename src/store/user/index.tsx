import { observable, action} from 'mobx'
class User{
  @observable user = {
  
  }
  @action setUser = (key:string, value: any): void => {
    this.user[key] = value
  }
}
const user = new User()
export {
  user
}