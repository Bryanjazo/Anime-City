import React from 'react';
import { Navbar} from 'rsuite';
import './Navbar.css'

function navBar(){


  return(
    <Navbar className="test">
      <Navbar.Header>
        <a href="/" className="navbar-brand logo">AnimeCity</a>
      </Navbar.Header>
    </Navbar>
  )
}

export default navBar;
