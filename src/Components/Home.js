import React, {useEffect, useState} from 'react'
import './Home.css'
import Anime from './Anime.js'
import {useDispatch,useSelector} from 'react-redux'
import {getAnimes} from '../Redux/reducerRedux'

function Home(){
 
  const {anime} = useSelector((state) => state.anime)
  console.log(anime)
  const dispatch = useDispatch()
  const [animes, setAnimes] = useState([])
  useEffect(() =>{
    dispatch(getAnimes())
  
  },[])


    return (
      <Anime animes={anime} />
    )

}

export default Home;
