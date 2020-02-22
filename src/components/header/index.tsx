import * as React from "react"
import { observer, inject } from 'mobx-react'
import './index.less'
@inject('UI', 'Header')
@observer
class Header extends React.Component<any, any> {
  props: any;
  constructor(props) {
    super(props)
  }
  render() {
    const {
      menus,
      setMenuSelect
    } = this.props.Header
    return <div className='app-header'>
      <div className='app-header-menu'>
        <i className='iconfont icon-card-tab-cebianlan'></i>
        <span className='app-badge' style={{
          top: 4,
          right: -4
        }}>80</span>
      </div>
      <div className='app-header-tab'>
        {
          menus.map((_menu, _index) => {
            return <div className={_menu.selected ? 'app-header-tab-item active' : 'app-header-tab-item'} key={_menu.key} onClick={
              () => {
                setMenuSelect(_index) //  设置选中
              }
            }>
              {_menu.label}
              {
                _menu.selected && <span className='app-badge' style={{
                  top: 7,
                  right: 2,
                  height: 6,
                  width: 6,
                  borderRadius: '50%'
                }}></span>
              }
            </div>
          })
        }
      </div>
      <div className='app-header-search'>
        <i className='iconfont icon--search'></i>
      </div>
    </div>
  }
}
export { Header }