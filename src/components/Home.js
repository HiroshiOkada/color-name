import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import ColorLens from 'material-ui/svg-icons/image/color-lens'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
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
            <IconButton>
              <ColorLens />
            </IconButton>
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
