import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Header } from '../components/header/index';
import { Footer } from '../components/footer/index';
import './index.less'
@inject('UI')
@observer
class Layout extends React.Component<any, any> {
  props: any;
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-layout'>
      <div className='app-layout-header'>
        <Header />
      </div>
      <div className='app-layout-content'>
        {
          this.props.children
        }
      </div>
      <div className='app-layout-footer'>
        <Footer />
      </div>
    </div>
  }
}
export { Layout }