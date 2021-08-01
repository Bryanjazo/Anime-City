import React from 'react'
import './favorites.css'
import {useHistory} from 'react-router-dom'
import {clearAnimeHome, getAnimeDetails} from '../Redux/reducerRedux.js'
import {useDispatch} from 'react-redux'
import '../Oauth/Profile.css'

function FavList({show}){

    const history = useHistory()

    const dispatch = useDispatch()

  const handleFavorite = (e,show) =>{
    e.preventDefault()
    dispatch(clearAnimeHome())
    console.log(show.id)
    dispatch(getAnimeDetails(show.id))
    history.push(`/animeInfo/${show.id}`)
  }

  return(
    <div className="favorites">
    <div className="fav_info">
      <img onClick={(e) => handleFavorite(e,show.anime)} className="imageFav" src={show.anime.image_url} alt={show.anime.title}/>
      </div>
    </div>
  )

}

export default FavList;
