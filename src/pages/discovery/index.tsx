import * as React from "react"
import { observer, inject } from 'mobx-react'
import { DiscoveryBody } from '../../components/discovery/index'
import './index.less'
@inject('UI')
@observer
class Discovery extends React.Component<any, any> {
  constructor(props) {
    super(props)
  }
  render() {
    return <div className='app-discovery'>
      <DiscoveryBody />
    </div>
  }
}
export { Discovery }