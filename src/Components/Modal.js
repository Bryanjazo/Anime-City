import React from 'react'
import './Modal.css'
import Modal from '@material-ui/core/Modal';
import {useSelector, useDispatch} from 'react-redux'
import {setModalStatus} from '../Redux/reducerRedux.js'


function ModalHome({title, description, genre,episodes,imageUrl,url,closeModal, key}){


  const dispatch = useDispatch()
    const {modal} = useSelector((state) => state.anime)

    console.log(title)
    return (
    <div key={key} className="modal">
      <div className="modal-title">
          {title}
        </div>
        <div className="modal_image">
          <img  src={imageUrl} alt="title"/>
        </div>
        <div className="description">
          {description}
        </div>
        <div className="genreHome">
          {genre}
        </div>
        <div className="episodes">{episodes}</div>

        <button className="watchBtn">Watch {title}</button>
        <button className="addToFavs">Add to favorites</button>







    </div>
    )

}

export default ModalHome
