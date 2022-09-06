import logo from './logo.svg';
import './App.css';
import Routing from './COM/Routing';
import Nav from './COM/Nav';
import {BrowserRouter as Router} from 'react-router-dom';
import TopNav from './COM/TopNav';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Login/> */}

        {/* <Nav/>
        <TopNav/> */}
        <Register/>
      </Router>
    </div>
  );
}

export default App;
