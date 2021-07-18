import React, {useState} from 'react';
import {MenuItems} from './MenuItems.js'
import {BrowserRouter as Router} from "react-router-dom";

function NavBar(){

  return(
  <nav className="NavbarItems">
    <h1 className="NavbarLogo">AnimeCity</h1>
      <div className="MenuItme">

      </div>
    <ul>
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
  </nav>
  )
}

export default NavBar;
