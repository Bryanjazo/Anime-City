import React from 'react'
import Home from './Components/Home.js'
import {BrowserRouter as Router} from "react-router-dom";
import navBar from './Components/Navbar.js'

function App() {
  return (
    <div className="App">
    <navBar />
    <Router path='/'>
        <Home />
    </Router>
    </div>
  );
}

export default App;
