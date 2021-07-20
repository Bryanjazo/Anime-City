import React, {useEffect, useState} from 'react'
import './Home.css'
import {useSelector, useDispatch} from 'react-redux'
import ModalHome from './Modal.js'
import {setModalStatus} from '../Redux/reducerRedux.js'


function Home(){
  const {modal} = useSelector((state) => state.anime)

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
const setModal = (e) => {
  e.preventDefault()
  dispatch(setModalStatus(!modal))
}
  console.log(modal, "modal")

    return (
      <div className="row">
        <h2>Mystery</h2>
        <div className="row_posters">
        {animes.filter(animeFilter => animeFilter.genre === "Mystery").map((anime, key) => (
            <>
              <img onClick onClick={setModal} className='row_poster' src={anime.image_url} alt={anime.title} />
              {modal && <ModalHome
              key={key}
              title={anime.title}
              description={anime.description}
              episodes={anime.episodes}
              genre={anime.genre}
              imageUrl={anime.image_url}
              url={anime.url}

              />}
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
