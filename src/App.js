import React from 'react'
import Home from './Components/Home.js'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import NavBar from './Navbar/Navbar.js'
import Login from './Oauth/SignIn.js'
import './App.css'




function App() {
  return (
    <Router >
    <div className="App">
    <NavBar />
    <Switch>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/">
          <Home />
      </Route>
    </Switch>
    </div>
  </Router>
  );
}

export default App;
