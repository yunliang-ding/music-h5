import './index.less'
const $: any = document.querySelector.bind(document)
class Toast {
  static show(message?: string) {
    let toast = document.createElement("div");
    toast.className = 'mobile-toast-container'
    toast.innerHTML = `<div class='mobile-toast'>
      <i class='iconfont icon-loading mobile-toast-icon'></i>
      <div class='mobile-toast-message'>
        ${message || ''}
      </div>
    </div>`
    $('#app').appendChild(toast)
  }
  static close() {
    $('.mobile-toast-container').remove()
  }
}
export { Toast }