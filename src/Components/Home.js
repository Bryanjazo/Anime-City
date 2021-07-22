import React, {useEffect, useState} from 'react'
import './Home.css'
import {useSelector, useDispatch} from 'react-redux'
import ModalHome from './Modal.js'
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
const animePush = (e) => {
  e.preventDefault()
  console.log(e.target.key)
}
  console.log(modal, "modal")

    return (
      <div className="row">
        <h2>Mystery</h2>
        <div className="row_posters">
        {animes.filter(animeFilter => animeFilter.genre === "Mystery").map(anime => (
            <>
              <img onClick={() => history.push(`/animeInfo/${anime.id}`)} key={anime.id} className='row_poster' src={anime.image_url} alt={anime.title} />
              <div className="buttonHome"><button>Button</button></div>
            </>

           ))}

        </div>

        <h2>Action</h2>
        <div className="row_posters">
        {animes.filter(animeFilter => animeFilter.genre === "Action").map(anime => (
            <img className='row_poster' key={anime.id} src={anime.image_url} alt={anime.title} /> ))}
        </div>
        <h2>Demons</h2>
        <div className="row_posters">
        {animes.filter(animeFilter => animeFilter.genre === "Demons").map(anime => (
            <img className='row_poster' key={anime.id} src={anime.image_url} alt={anime.title} /> ))}
        </div>
        <h2>Comedy</h2>
        <div className="row_posters">
        {animes.filter(animeFilter => animeFilter.genre === "Comedy").map(anime => (
            <img className='row_poster' key={anime.id} src={anime.image_url} alt={anime.title} /> ))}
        </div>
        <h2>Dementia</h2>
        <div className="row_posters">
        {animes.filter(animeFilter => animeFilter.genre === "Dementia").map(anime => (
            <img className='row_poster' key={anime.id} src={anime.image_url} alt={anime.title} /> ))}
        </div>
      </div>
    )

}

export default Home;
