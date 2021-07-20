import React from 'react'
import './Modal.css'
import Modal from '@material-ui/core/Modal';
import {useSelector, useDispatch} from 'react-redux'
import {setModalStatus} from '../Redux/reducerRedux.js'


function ModalHome({title, description, genre,episodes,imageUrl,url,closeModal, key}){


  const dispatch = useDispatch()
    const {modal} = useSelector((state) => state.anime)

    console.log(key)
    return (
    <div className="modal">
      <div className="modal-title">
        {title}
        </div>
        <div className="modal_image">
          {imageUrl}
        </div>

    </div>
    )

}

export default ModalHome
