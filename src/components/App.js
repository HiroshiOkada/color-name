import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './Home'

import { distanceHSV } from '../utils/color-utils'

function App() {
  return (
    <MuiThemeProvider>
      <Home />
    </MuiThemeProvider>
  )
}

export default App
