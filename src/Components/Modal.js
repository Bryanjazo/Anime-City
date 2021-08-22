import React, {useState} from 'react'
import './Modal.css'

import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import MiniSignUp from '../Oauth/MiniSignUp.js'



function ModalHome(){

  const {anime} = useSelector((state) => state.anime)

  const history = useHistory()
  const [error, setError] = useState({})



  const handleFavorites = (show, e) =>{
    e.preventDefault()

    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
          genre: show.genre,
          anime_id: show.id,
          user_id: localStorage.user
       })
    })
    .then(resp => resp.json())

    .then(function(data){
      if(data.id){
       history.push('/Favorites')
     }else{
       console.log(data)
     }
     setError(data)
    })

  }

  console.log(error)
    return (
      <>
      <div className="banner">
        <div className="errorMsg alert-error">
          <p className="errormessage">{error.message}</p>
        </div>
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
