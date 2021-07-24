import React, {useEffect} from 'react'
import './Modal.css'
import Modal from '@material-ui/core/Modal';
import {useSelector, useDispatch} from 'react-redux'
import {setModalStatus} from '../Redux/reducerRedux.js'
import MiniSignUp from '../Oauth/MiniSignUp.js'
import {getAnimeDetails} from '../Redux/reducerRedux.js'


function ModalHome(){

  const {anime} = useSelector((state) => state.anime)


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
          <button>Add to favorites</button>
          <a href={show.url}>
          <button>Watch {show.title}</button>
          </a>
        </div>

        </div>
      )}
      </>
    )

}

export default ModalHome
