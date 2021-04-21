import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
    </Router>
  );
};

export default App;
