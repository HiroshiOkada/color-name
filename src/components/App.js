import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './Home'

function App() {
  return (
    <MuiThemeProvider>
      <Home />
    </MuiThemeProvider>
  )
}

export default App
