import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import Home from './Home.jsx';
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App
