import React, {useEffect, useState} from 'react'


function Favorites(){
  const [favorites, setFavorites] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:3000/favorites/${localStorage.user}`)
    .then(resp => resp.json())
    .then(animes => {
      setFavorites(animes)
      console.log(animes)
    })
  })
    return (
      <div>{favorites.map(fav => <h1>fav.title</h1>)}</div>
    )

}

export default Favorites
