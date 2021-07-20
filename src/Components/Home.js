import React, {useEffect, useState} from 'react'
import './Home.css'



function Home(){

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
      <div className="row">
        <h2>Mystery</h2>
        <div className="row_posters">
        {animes.filter(animeFilter => animeFilter.genre === "Mystery").map(anime => (
            <img className='row_poster' key={anime.id} src={anime.image_url} alt={anime.title} /> ))}
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
