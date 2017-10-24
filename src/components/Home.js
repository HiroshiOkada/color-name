import React, { Component } from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import ColorLens from 'material-ui/svg-icons/image/color-lens'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Color from './Color'
import './Home.css'

class Home extends Component {
  state = {
    dataSource: ['#fff']
  }

  handleUpdateInput = value => {
    this.setState({ dataSource: [value, '#fff'] })
  }

  render() {
    const { dataSource } = this.state

    const infoList = [
      {
        title: '#FFFF00 (input color)',
        cssName: 'yellow',
        color: '#ffff00',
        rgb: '(255, 255, 0)',
        rgba: '(255, 255, 0, 1)',
        hsl: '(60, 100%, 50%)',
        hwb: '(60, 0%, 0%)',
        cmyk: '(0%, 0%, 100%, 0%)',
        otherNames: ['黄色', 'イエロー']
      }
    ]

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
          searchText="#ffff00"
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
