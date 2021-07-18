import React, {useState} from 'react';
import {MenuItems} from './MenuItems.js'
import {BrowserRouter as Router} from "react-router-dom";
import {Button} from '../Components/Button.js'
import './Navbar.css'
function NavBar(){
  const [clicked, setClicked] = useState(false)

  const handleClick = (e) =>{
    e.preventDefault()
    setClicked(!clicked)
  }
  return(
  <nav className="NavbarItems">
    <h1 className="NavbarLogo">AnimeCity<i class="fab fa-fantasy-flight-games"></i></h1>
      <div className="MenuItmem" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
    {MenuItems.map((item, index) => {
      return(
        <li key={index}>
          <a className={item.cName} href={item.url}>
            {item.title}
          </a>
        </li>
    )
    })}
    </ul>
    <Button>Sign Up</Button>
  </nav>
  )
}

export default NavBar;
