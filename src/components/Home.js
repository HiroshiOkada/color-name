import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import AppBar from 'material-ui/AppBar'
import Color from './Color'
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
        <AppBar
          title="Color Name"
          iconElementLeft={
            <img src="/icon128.png" alt="" width={64} height={64} />
          }
        />
        <AutoComplete
          hintText="Input color code or name"
          dataSource={dataSource}
          searchText={searchText}
          onUpdateInput={this.handleUpdateInput}
          fullWidth
        />
        <div>
          {infoList.map((info, idx) => (
            <Color initiallyExpanded={idx < 2} key={info.title} info={info} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
