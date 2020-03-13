import * as React from "react"
import * as ReactDOM from "react-dom"
const $:any = document.querySelector.bind(document)
import './index.less'
/**
  show: boolean
  menus: array
 */
class ActionSheet extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  closeActionSheet = () => {
    $('.mobile-action-sheet-container').remove()
    this.props.close &&  this.props.close()
  }
  renderActionSheet() {
    const {
      show,
      menus
    } = this.props
    return show && <div className='mobile-action-sheet'>
      <div className='mobile-action-sheet-title'>
        请选择
      </div>
      {
        menus && menus.map((menu, index) => {
          return <div key={menu.key} className='mobile-action-sheet-item' onClick={
            () => {
              menu.click && menu.click(index)
              this.closeActionSheet()
            }
          }>
            <div className='mobile-action-sheet-item-icon'>{menu.icon}</div>
            <div className='mobile-action-sheet-item-label'>{menu.label}</div>
          </div>
        })
      }
      <div className='mobile-action-sheet-cancel' onClick={
        () => {
          this.closeActionSheet()
        }
      }>
        取消
      </div>
    </div>
  }
  componentDidUpdate (){
    if(this.props.show){
      let actionSheet = document.createElement("div");
      actionSheet.className = 'mobile-action-sheet-container'
      $('body').appendChild(actionSheet)
      // actionSheet.addEventListener('click', () => {
      //   actionSheet.remove()
      // }, false)
      ReactDOM.render( this.renderActionSheet(), document.querySelector('.mobile-action-sheet-container') )
    }
  }
  render(){
    return null
  }
}
export { ActionSheet }