import React, {useEffect, useState} from 'react'
import FavList from './FavList.js'
import './favorites.css'

function Favorites(){
  const [favorites, setFavorites] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:3000/users/${localStorage.user}/favorites`)
    .then(resp => resp.json())
    .then(animes => {
      setFavorites(animes)

    })
  },[])

  const favList = favorites.map(show =>
    <div className="home__row">
        <FavList show={show}/>
    </div>

  )

    return (
      <div className="home">
        <div className="home__container">
          {favList}
        </div>

      </div>
    )

}

export default Favorites
