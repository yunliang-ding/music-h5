import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Drawer } from '../../mobile'
import './index.less'
const $: any = document.querySelector.bind(document)
const Window: any = window
@inject('UI', 'Header')
@observer
class Header extends React.Component<any, any> {
  props: any;
  state = {
    show: false
  }
  constructor(props) {
    super(props)
  }
  componentDidUpdate() {
    setTimeout(() => {
      $('.app-home-back') && $('.app-home-back').setAttribute('class', 'app-home-back app-home-back-move')
    }, 100)
  }
  componentDidMount() {
    setTimeout(() => {
      $('.app-home-back') && $('.app-home-back').setAttribute('class', 'app-home-back app-home-back-move')
    }, 100)
  }
  render() {
    const {
      menus,
      router,
      setMenuSelect,
      navTitle
    } = this.props.Header
    const home = router === '#/home'
    const singlePage = ['#/home', '#/discovery', '#/towns', '#/video'].indexOf(router) === -1
    console.log(this.state)
    return <div className='app-header'>
      {
        home && <img className='app-home-back' />
      }
      {
        singlePage ? <div className='app-header-nav'>
          <i className='iconfont icon-back' onClick={
            () => {
              Window.mySwiper.allowSlideNext = true
              Window.mySwiper.allowSlidePrev = true
              window.history.back()
            }
          }></i>
          {navTitle}
          <i className='iconfont icon-more'></i>
        </div> : [
            <div className='app-header-menu' onClick={
              () => {
                this.setState({show: true})
              }
            }>
              <i className='iconfont icon-card-tab-cebianlan'></i>
              <span className='app-badge' style={{
                top: 4,
                right: -4
              }}>80</span>
            </div>,
            <div className='app-header-tab'>
              {
                menus.map((_menu, _index) => {
                  return <div
                    style={{
                      color: home ? '#fff' : '#111'
                    }}
                    className={_menu.selected ? 'app-header-tab-item active' : 'app-header-tab-item'}
                    key={_menu.key}
                    onClick={
                      () => {
                        setMenuSelect(_index) //  设置选中
                      }
                    }
                  >
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
            </div>,
            <div className='app-header-search'>
              <i className='iconfont icon--search'></i>
            </div>
          ]
      }
      <Drawer
        title=''
        show={this.state.show}
        close={
          () => {
            this.setState({ show: false })
          }
        }
      >
        <div className='app-user-info'>
          <div className='app-user-info-header'>
            <img src='https://p3.music.126.net/7D-Dvbm6UJhR1Z931olS5w==/109951164610653344.jpg' />
            <span>音乐不是我的全部</span>
          </div>
        </div>
      </Drawer>
    </div>
  }
}
export { Header }