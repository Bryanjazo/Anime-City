import React from 'react'
import Home from './Components/Home.js'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import NavBar from './Navbar/Navbar.js'
import Login from './Oauth/SignIn.js'
import SignUp from './Oauth/SignUp.js'
import Anime from './Components/Anime.js'
import ModalHome from './Components/Modal.js'
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
      <Route path="/animeInfo/:id">
        <ModalHome />
      </Route>
      <Route path="/SignUp">
        <SignUp />
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
