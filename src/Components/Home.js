import React, {useEffect, useState} from 'react'
import './Home.css'
import {useSelector, useDispatch} from 'react-redux'
import ModalHome from './Modal.js'
import Anime from './Anime.js'
import {Link, useHistory} from 'react-router-dom'
import {setModalStatus} from '../Redux/reducerRedux.js'


function Home(){
  const {modal} = useSelector((state) => state.anime)
  const history = useHistory()
  const [animes, setAnimes] = useState([])
  const dispatch = useDispatch()
  useEffect(() =>{
    fetch("http://localhost:3000/animes")
    .then(resp => resp.json())
    .then(animes => {
      setAnimes(animes)
      console.log(animes)
    })
  },[])


    return (
      <Anime animes={animes} />
    )

}

export default Home;
