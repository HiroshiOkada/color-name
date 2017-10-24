import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './Home'

import { distanceHSV } from '../utils/color-utils'

console.log(distanceHSV('ffff00', 'eeccee'))

function App() {
  return (
    <MuiThemeProvider>
      <Home />
    </MuiThemeProvider>
  )
}

export default App
