import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import AppBar from 'material-ui/AppBar'
import Color from './Color'
import GitHubRibbon from './GitHubRibbon'
import Description from './Description'
import './Home.css'
import { getInfoList } from '../utils'

class Home extends Component {
  state = {
    dataSource: ['#fff'],
    searchText: '#ff00ff',
    infoList: getInfoList('#ff00ff')
  }

  handleUpdateInput = searchText => {
    const infoList = getInfoList(searchText)
    this.setState({
      dataSource: ['#fff'],
      searchText,
      infoList: infoList || this.state.infoList
    })
  }

  render() {
    const { dataSource, searchText, infoList } = this.state

    return (
      <div className="Home">
        <GitHubRibbon />
        <AppBar
          title="Color Name"
          iconElementLeft={
            <img src="/icon128.png" alt="" width={64} height={64} />
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
