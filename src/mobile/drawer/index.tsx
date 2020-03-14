import * as React from "react"
import * as ReactDOM from "react-dom"
const $: any = document.querySelector.bind(document)
import './index.less'
class Drawer extends React.Component<any, any> {
  props: any
  closeDrawer = () => {
    $('.mobile-drawer-container').remove()
    this.props.close && this.props.close()
  }
  renderDrawer() {
    const {
      show,
      title
    } = this.props
    return show && <div className='mobile-drawer'>
      <div className='mobile-drawer-header'>
        <span>{title}</span>
        <i className='iconfont icon-guanbi' onClick={
          () => {
            this.closeDrawer()
          }
        }></i>
      </div>
      <div className='mobile-drawer-body'>
        {this.props.children}
      </div>
    </div>
  }
  componentDidUpdate() {
    if (this.props.show) {
      let drawer = document.createElement("div");
      drawer.className = 'mobile-drawer-container'
      $('body').appendChild(drawer)
      ReactDOM.render(this.renderDrawer(), $('.mobile-drawer-container'))
    }
  }
  render() {
    return null
  }
}
export {
  Drawer
}
