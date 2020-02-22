import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Badge } from 'react-weui'
import 'weui';
import 'react-weui/build/dist/react-weui.css';
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
        <i className='iconfont icon-item'></i>
      </div>
      <div className='app-header-tab'>
        {
          menus.map((_menu, _index) => {
            return <span className={_menu.selected ? 'active' : ''} key={_menu.key} onClick={
              () => {
                setMenuSelect(_index) //  设置选中
              }
            }>
              {_menu.label}
            </span>
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