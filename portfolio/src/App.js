import { CssBaseline, ThemeProvider, createTheme } from "@mui/material/";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
    <Router>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
