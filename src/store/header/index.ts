import { observable, action } from 'mobx'
const hashMapping = {
  0: '#/home',
  1: '#/discovery',
  2: '#/towns',
  3: '#/video',
  4: '#/album',
  5: '#/playlist'
}
class Header {
  @observable router = '#/home'
  @observable navTitle = localStorage.getItem('navTitle')
  @observable menus = [{
    key: Math.random(),
    label: '我的',
    selected: true
  }, {
    key: Math.random(),
    label: '发现',
    selected: false
  }, {
    key: Math.random(),
    label: '云村',
    selected: false
  }, {
    key: Math.random(),
    label: '视频',
    selected: false
  }]
  @action setRouter = (router:string) => {
    this.router = router
  }
  @action setNavTitle = (navTitle:string) => {
    this.navTitle = navTitle
    localStorage.setItem('navTitle', navTitle)
  }
  @action setMenus = (_index: number, _key, _value): void => {
    this.menus[_index][_key] = _value
  }
  @action setMenuSelect = (_index:number): void => {
    this.menus.map((menu, index) => {
      menu.selected = index === _index
    })
    this.router = hashMapping[_index]
    location.hash = hashMapping[_index]
  }
}
const header = new Header()
export {
  header
}