import React, {useEffect, useState} from 'react'
import FavList from './FavList.js'
import {useHistory} from 'react-router-dom'
import './favorites.css'
import '../Oauth/Profile.css'


function Favorites(){
  const [favorites, setFavorites] = useState([])
  const history = useHistory()
  useEffect(() =>{
    fetch(`http://localhost:3000/users/${localStorage.user}/favorites`)
    .then(resp => resp.json())
    .then(animes => {
      setFavorites(animes)

    })
  },[])

  const handleRoute = () =>{
    history.push('/')
  }
  const favList = favorites.map(show =>
    <div className="home__row">
        <FavList show={show}/>
    </div>

  )


if(favorites.length === 0){
    return (
      <div className="prime">
        <div className="WelcomeHeader">
          <h1>Looks Like You Have No Favorites</h1><br></br>
        </div>
        <div className="UpdateForm">
        <div className='prime__container'>
            <h4 className="profileDetails">Click below to start adding to list!</h4>
            <div className="ProfileText">
            </div>
            <button onClick={handleRoute}>Update Profile</button>
          </div>
        </div>
      </div>

    )
  }else{
    return(
      <div className="home">
        <div className="home__container">
          <h1 className="favH1">Favorites:</h1>
          {favList}
        </div>

      </div>
  )
  }

}

export default Favorites
