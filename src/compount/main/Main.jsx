import React from 'react'
import './main.css'
import Card from '../card/Card'

function Main() {
    return (

        <div>
            <div class="location" id="home">
                <h1 id="home">Popular on Netflix</h1>
                <div class="box">
                    <Card />
                </div>
            </div>

            <h1 id="tvShows">TV Shows</h1>
      <div class="box">
      <Card />             
      </div>
      

      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <div class="box">
        
      <Card />            
      </div>

      <h1 id="originals">Netflix Originals</h1>
      <div class="box">
      <Card />             
      </div>
        </div>
    )
}

export default Main