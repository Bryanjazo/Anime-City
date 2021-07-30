import React, {useState} from 'react'
import './Modal.css'

import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import MiniSignUp from '../Oauth/MiniSignUp.js'



function ModalHome(){

  const {anime} = useSelector((state) => state.anime)
  const [genre, setGenre] = useState()
  const history = useHistory()
  const [animeId, setAnimeId] = useState()


  const handleFavorites = (show, e) =>{
    e.preventDefault()
    console.log(show)
    setGenre(show.genre)
    setAnimeId(show.id)
    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
          genre: genre,
          anime_id: animeId
       })
    })
    .then(resp => resp.json())
    .then(function(data){


         history.push('/')

    })
  }
    return (
      <>
      <div className="banner">

      </div>
      {anime.map(show =>
        <div className="modalContainer">

        <div className="section">

        <div className="imageUrl">
          <div className="title">
          <h1>{show.title}</h1>
          </div>
          <img style={{width: '800px', height: '800px'}} src={show.image_url} alt={show.title}/>

          </div>
          <div className="miniSignUp">
          <MiniSignUp />
          </div>
        </div>

        <div className="body">
          <p>{show.description}</p>
        </div>
        <div className="genre">
          <p>{show.genre}</p>
        </div>
        <div className="Episodes">
          <p>{show.episodes}</p>
        </div>
        <div className="footer">
          <button onClick={(e) => handleFavorites(show, e)}>Add to favorites</button>
          <a href={show.url}>
          <button >Watch {show.title}</button>
          </a>
        </div>

        </div>
      )}
      </>
    )

}

export default ModalHome
