import React from 'react'
import './Anime.css'
import {useHistory} from 'react-router-dom'
import {getAnimeDetails} from '../Redux/reducerRedux.js'
import ModalTwo from './ModalTwo.js'
import {useDispatch} from 'react-redux'

function Anime({animes}){
  console.log(animes)
  const history = useHistory()

  const dispatch = useDispatch()
  const handleClick = (anime) => {
    console.log(anime)
    dispatch(getAnimeDetails(anime.id))
    history.push(`/animeInfo/${anime.id}`)
  }


    return (
      <div className="row">
        <h2>Mystery</h2>
        <div className="row_posters">
        {animes.filter(animeFilter => animeFilter.genre === "Mystery").map(anime => (
            <>
              <ModalTwo animes={anime} />
            </>
           ))}
        </div>

        <h2>Action</h2>
        <div className="row_posters">
        {animes.filter(animeFilter => animeFilter.genre === "Action").map(anime => (
              <>
                <ModalTwo animes={anime} />
              </>
             ))}
        </div>
        <h2>Demons</h2>
        <div className="row_posters">
          {animes.filter(animeFilter => animeFilter.genre === "Demons").map(anime => (
                <>
                 <ModalTwo animes={anime} />
                </>
               ))}
        </div>
        <h2>Comedy</h2>
        <div className="row_posters">
          {animes.filter(animeFilter => animeFilter.genre === "Comedy").map(anime => (
                <>
                 <ModalTwo animes={anime} />
                </>
               ))}
        </div>
        <h2>Dementia</h2>
        <div className="row_posters">
          {animes.filter(animeFilter => animeFilter.genre === "Dementia").map(anime => (
                <>
                  <ModalTwo animes={anime} />
                </>
               ))}
        </div>
      </div>
    )
}

export default Anime
