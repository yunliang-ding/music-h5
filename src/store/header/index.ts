import { observable, action } from 'mobx'
class Header {
  @observable menus = [{
    key: Math.random(),
    label: '我的',
    selected: false
  }, {
    key: Math.random(),
    label: '发现',
    selected: true
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
  }
}
const header = new Header()
export {
  header
}