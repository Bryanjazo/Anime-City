import React, {useEffect, useState} from 'react'
import './Home.css'
import {useSelector} from 'react-redux'

import Anime from './Anime.js'

import {setModalStatus} from '../Redux/reducerRedux.js'


function Home(){
  const {modal} = useSelector((state) => state.anime)
  const [animes, setAnimes] = useState([])
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
