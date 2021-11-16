import { CssBaseline, ThemeProvider, createTheme } from "@mui/material/";
import Navigation from "./Navigation";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Projects from "./pages/Projects";
import "@fontsource/open-sans";

const theme = createTheme({  
  typography: {
    fontFamily: [
      '"Open Sans"'
    ].join(','),
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navigation />
        <div id="home"><Home /></div>
        <div id="courses"><Courses /></div>
        <div id="projects"><Projects /></div>
      </div>
      </ThemeProvider>
  );
}

export default App;
