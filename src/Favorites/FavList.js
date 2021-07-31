import React from 'react'
import './favorites.css'

function FavList({show}){

  return(
    <div className="favorites">
    <div className="fav_info">
      <img className="imageFav" src={show.anime.image_url} alt={show.anime.title}/>
      </div>
    </div>
  )
}

export default FavList;
