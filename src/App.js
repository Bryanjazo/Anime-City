import React from 'react'
import Home from './Components/Home.js'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import NavBar from './Navbar/Navbar.js'
import Login from './Oauth/SignIn.js'
import SignUp from './Oauth/SignUp.js'
import ModalHome from './Components/Modal.js'
import Profile from './Oauth/Profile.js'
import Favorites from './Favorites/favorites.js'
import {useSelector} from 'react-redux'
import './App.css'




function App() {
    const {user} = useSelector((state) => state.anime)

  return (
    <Router >
    <div className="App">
    <NavBar />
    <Switch>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Profile">
        <Profile />
      </Route>
      <Route exact path="/Favorites">
       {user === '' ? <Redirect to='/'/> : <Favorites />}
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
