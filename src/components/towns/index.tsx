import * as React from "react"
import { observer, inject } from 'mobx-react'
import { Table } from '../table/index'
import './index.less'
@inject('UI', 'Table')
@observer
class Towns extends React.Component<any, any> {
  props: any
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.Table.queryRecommendSong()
  }
  render() {
    const {
      recommendSong
    } = this.props.Table
    return <div className='app-towns'>
      <Table data={recommendSong} />
    </div>
  }
}
export { Towns }