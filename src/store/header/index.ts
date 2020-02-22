import { observable, action } from 'mobx'
const hashMapping = {
  0: 'home',
  1: 'discovery',
  2: 'towns',
  3: 'video'
}
class Header {
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
  @action setMenus = (_index: number, _key, _value): void => {
    this.menus[_index][_key] = _value
  }
  @action setMenuSelect = (_index:number): void => {
    this.menus.map((menu, index) => {
      menu.selected = index === _index
    })
    window.location.hash = hashMapping[_index]
  }
}
const header = new Header()
export {
  header
}