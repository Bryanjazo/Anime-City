import React from 'react'
import './Modal.css'
import Modal from '@material-ui/core/Modal';
import {useSelector, useDispatch} from 'react-redux'
import {setModalStatus} from '../Redux/reducerRedux.js'


function ModalHome({title, description, genre,episodes,imageUrl,url, key}){


  const dispatch = useDispatch()
    const {modal} = useSelector((state) => state.anime)
    const closeModal = () =>{
      dispatch(setModalStatus(!modal))
    }
    console.log(title)
    return (
    <div >
      <h1>{title}</h1>
    </div>
    )

}

export default ModalHome
