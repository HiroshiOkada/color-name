import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import AppBar from 'material-ui/AppBar'
import Color from './Color'
import Description from './Description'
import './Home.css'
import {
  getInfoList,
  getDataSourceFromLocalStoage,
  setDataSourceToLocalStoage
} from '../utils'

class Home extends Component {
  state = {
    dataSource: getDataSourceFromLocalStoage(),
    searchText: '#',
    infoList: []
  }

  handleUpdateInput = searchText => {
    const infoList = getInfoList(searchText)
    if (infoList) {
      const dataSource = [
        searchText,
        ...this.state.dataSource.filter(item => item !== searchText)
      ]
      this.setState({
        searchText,
        dataSource,
        infoList: infoList || this.state.infoList
      })
      setDataSourceToLocalStoage(dataSource)
    } else {
      this.setState({
        searchText
      })
    }
  }

  render() {
    const { dataSource, searchText, infoList } = this.state

    return (
      <div className="Home">
        <AppBar
          title="Color Name"
          iconElementLeft={
            <img src="/color-name/icon128.png" alt="" width={64} height={64} />
          }
        />
        <div className="Home-content">
          <Description />
          <AutoComplete
            hintText="Input color code or name"
            dataSource={dataSource}
            searchText={searchText}
            onUpdateInput={this.handleUpdateInput}
            fullWidth
          />
          {infoList.map(info => <Color key={info.color} info={info} />)}
        </div>
      </div>
    )
  }
}

export default Home
