import React from 'react'
import './Modal.css'
import Modal from '@material-ui/core/Modal';
import {useSelector, useDispatch} from 'react-redux'
import {setModalStatus} from '../Redux/reducerRedux.js'


function ModalHome(){

  const {anime} = useSelector((state) => state.anime)
  console.log(anime)
  const dispatch = useDispatch()
    return (
      <>
      <div className="banner">

      </div>
      {anime.map(show =>
        <div className="modalContainer">
        <div className="title">
        <h1>{show.title}</h1>
        </div>
        <div className="section">
        <div className="imageUrl">
          <img src={show.image_url} alt={show.title}/>
          </div>
          <img src={show.image_url} alt={show.title}/>
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
          <button>Watch {show.title}</button>
        </div>

        </div>
      )}
      </>
    )

}

export default ModalHome
