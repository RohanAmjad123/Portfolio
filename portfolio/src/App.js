import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
