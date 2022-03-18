import { CssBaseline, ThemeProvider, createTheme } from "@mui/material/";
import Navigation from "./components/Navigation";
import Home from "./sections/Home";
import Courses from "./sections/Courses";
import Projects from "./sections/Projects";
import Footer from "./sections/Footer";
import LineDivider from "./components/LineDivider";
import "@fontsource/open-sans";

const theme = createTheme({
  typography: {
    fontFamily: ['"Open Sans"'].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <div className="App">
        <Navigation />
        <div id="Home">
          <Home />
        </div>
        <div id="Courses">
          <LineDivider />
        </div>
        <Courses />
        <div id="Projects">
          <LineDivider />
        </div>
        <Projects />
        <LineDivider />
      </div>
    </ThemeProvider>
  );
}

export default App;
