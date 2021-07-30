import React, {useEffect, useState} from 'react'


function Favorites(){
  const [favorites, setFavorites] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:3000/users/${localStorage.user}/favorites`)
    .then(resp => resp.json())
    .then(animes => {
      setFavorites(animes)

    })
  },[])

  const obj = favorites.map(show => Object.keys(show.anime).filter(key => show.anime[key].id))
  console.log(favorites)
    return (
      <div>


      </div>
    )

}

export default Favorites
