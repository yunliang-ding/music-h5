import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Div1 } from './div1'
import { Div2 } from './div2'
import { Footer } from '../footer/index'
import { PullRefresh } from '../../mobile'
import './index.less'
@inject('UI', 'Table')
@observer
class Album extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <PullRefresh element='.app-album-div1'>
      <div className='app-album'>
        <div className='app-album-body'>
          <Div1 />
          <Div2 />
        </div>
        <div className='app-album-footer'>
          <Footer />
        </div>
      </div>
    </PullRefresh>
  }
}
export { Album }