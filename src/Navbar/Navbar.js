import React, {useState} from 'react';

import {Link} from 'react-router-dom'
import {Button} from '../Components/Button.js'
import {useSelector, useDispatch} from 'react-redux'
import {clearAnimeHome, setUser} from '../Redux/reducerRedux.js'
import './Navbar.css'
function NavBar(){

  const {user} = useSelector((state) => state.anime)
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()
  const handleClick = (e) =>{
    e.preventDefault()
    setClicked(!clicked)
  }

  const clearAnime = () => {
    dispatch(clearAnimeHome())
  }

  const handleLogOut = () => {
  localStorage.user = ""
   dispatch(setUser(null))
  }
  return(
  <nav className="NavbarItems">
    <Link className="cla" to="/">
    <h1  onClick={clearAnime} className="NavbarLogo changeTitle">AnimeCity<i class="fab fa-fantasy-flight-games"></i></h1>
    </Link>
      <div className="MenuItmem" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>


        <li >
        <Link className="nav-links" onClick={clearAnime}  to="/Home">
            Home
        </Link>
          <Link className="nav-links" onClick={clearAnime}  to="/Shows">
            Shows

        </Link>
          <Link className="nav-links" onClick={clearAnime}  to="/Favorites">
            Favorites
        </Link>
          {user !== null ? <Link className="nav-links" onClick={clearAnime}  to="/Profile">Profile</Link> : ''}


          <Link className="nav-links" onClick={clearAnime}  to="/Premium">
            Premium
          </Link>
        </li>
    </ul>
    <Link to={!user && '/Login' }>
    {user !== null ? <Button onClick={handleLogOut}>Sign Out</Button> : <Button>Login</Button>}
    </Link>
  </nav>
  )
}

export default NavBar;
