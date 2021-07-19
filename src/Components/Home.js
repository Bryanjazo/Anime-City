import React, {useEffect, useState} from 'react'
import './Home.css'
import Anime from './Anime.js'


function Home(){

  const [animes, setAnimes] = useState([])

  useEffect(() =>{
    fetch("http://localhost:3000/animes")
    .then(resp => resp.json())
    .then((animes) => {
      setAnimes(animes)
      console.log(animes)
    })
  },[])
  const anime = animes.map(anime => (

      <div className="home__row ">
           <Anime
               {...anime}
           />

         </div>
        )
       )

    return (
      <div className="Home">
        <div className="Carousel">

        </div>
          <div className="Anime-Rows">
              <Anime/>
          </div>
      </div>
    )

}

export default Home;
