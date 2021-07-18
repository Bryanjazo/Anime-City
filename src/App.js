import React from 'react'
import Home from './Components/Home.js'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ButtonAppBar from './Components/Navbar.js'

function App() {
  return (
    <div className="App">
    <ButtonAppBar />
    <Router path='/'>
        <Home />
    </Router>
    </div>
  );
}

export default App;
