import React from 'react'
import Home from './Components/Home.js'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
    <Router path='/'>
        <Home />
    </Router>
    </div>
  );
}

export default App;
