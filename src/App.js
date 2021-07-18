import React from 'react'
import Home from './Components/Home.js'
import {BrowserRouter as Router} from "react-router-dom";
import NavBar from './Navbar/Navbar.js'



function App() {
  return (
    <div className="App">
    <NavBar />

    <Router path='/'>

        <Home />
    </Router>
    </div>
  );
}

export default App;
