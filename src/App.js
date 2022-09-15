// import './App.css';
import Routing from './COM/Routing';
import Nav from './COM/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import TopNav from './COM/TopNav';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Homepage from './Pages/Homepage';

function App() {

  if(localStorage.getItem('isLoggedIn') === 'true') {
    return(
      <div className='App'>
        <Router>
          <Nav/>
          <TopNav/>
          <Routing/>
        </Router>
      </div>
    )
  }
  else {
    return (
      <div className='App'>
        <Router>
          <Routing/>
        </Router>
      </div>
    )
  }
}

export default App;
