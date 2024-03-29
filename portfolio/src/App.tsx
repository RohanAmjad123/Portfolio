import React from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material/'
import Navigation from './components/Navigation'
import Home from './sections/Home'
import Courses from './sections/Courses'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import '@fontsource/open-sans'

const theme = createTheme({
  typography: {
    fontFamily: ['"Open Sans"'].join(',')
  }
})

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navigation />
          <div className="section" id="Home">
            <Home />
          </div>
          <div className="section" id="Courses">
            <Courses />
          </div>
          <div className="section" id="Projects">
            <Projects />
          </div>
          <div className="section" id="Contact">
            <Footer />
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App
