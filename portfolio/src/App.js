import { CssBaseline, ThemeProvider, createTheme } from "@mui/material/";
import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import Courses from "./sections/Courses";
import Projects from "./sections/Projects";
import "@fontsource/open-sans";

const theme = createTheme({
  typography: {
    fontFamily: ['"Open Sans"'].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navigation />
        <div id="Home">
          <Home />
        </div>
        <div id="Courses">
          <Courses />
        </div>
        <div id="Projects">
          <Projects />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
