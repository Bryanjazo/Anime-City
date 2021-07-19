import React from 'react'
import './Anime.css'

function Anime({title,description,episodes, genre, id, image_url, url}){
    return (
      <div className="AnimeDiv">
      <div class="container">
          <div class="item">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
          <div class="item">4</div>
          <div class="item">5</div>
        </div>
        <div class="content">
         <div class="background">
           <div class="left">left</div>
           <div class="right">right</div>
         </div>
         <div class="content-container">content here...</div>
       </div>
      </div>
    )
}

export default Anime
