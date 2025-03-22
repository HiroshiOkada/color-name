import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Color from './Color.jsx';
import Description from './Description.jsx';
import './Home.css';
import {
  getInfoList,
  getDataSourceFromLocalStoage,
  setDataSourceToLocalStoage,
} from '../utils';

function Home() {
  const [dataSource, setDataSource] = useState(getDataSourceFromLocalStoage());
  const [searchText, setSearchText] = useState('#');
  const [infoList, setInfoList] = useState([]);

  useEffect(() => {
    const newInfoList = getInfoList(searchText);
    if (newInfoList) {
      const newDataSource = [
        searchText,
        ...dataSource.filter((item) => item !== searchText),
      ];
      setDataSource(newDataSource);
      setInfoList(newInfoList);
      setDataSourceToLocalStoage(newDataSource);
    }
  }, [searchText, dataSource]);

  const handleInputChange = (event, value) => {
    setSearchText(value);
  };

  return (
    <div className="Home">
      <AppBar position="static">
              <Toolbar>
                <img src="/color-name/icon128.png" alt="" width={32} height={32} style={{ marginRight: 8 }} />
                Color Name
              </Toolbar>
            </AppBar>
      <div className="Home-content">
        <Description />
        <Autocomplete
          freeSolo
          options={dataSource}
          inputValue={searchText}
          onInputChange={handleInputChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Input color code or name"
              variant="outlined"
            />
          )}
          fullWidth
        />
        {infoList.map((info) => (
          <Color key={info.color} info={info} />
        ))}
      </div>
    </div>
  );
}

export default Home;
