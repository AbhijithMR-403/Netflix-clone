import React, { useState } from 'react'
import './main.css'
import Card from '../card/Card'
import instance from '../../axios'
import { API_KEY, img_Base_url } from '../../constants/constants'
import { useEffect } from 'react'

function Main() {
    const [movie,setMovie] = useState("")
    useEffect(()=>{
        instance.get(`movie/now_playing?api_key=${API_KEY}`).then((res)=>{
          console.log(res.data.results)
          setMovie(res.data.results[0].backdrop_path)
        })
      })
      console.log(img_Base_url+movie);
    return (
        <div>
            <div className="location" id="home">
                <h1 id="home">Popular on Netflix</h1>
                <div className="box">
                    <Card img_path={img_Base_url+movie} />
                </div>
            </div>

            <h1 id="tvShows">TV Shows</h1>
      <div className="box">
      <Card />             
      </div>
      

      <h1 id="movies">Blockbuster Action & Adventure</h1>
      <div className="box">
        
      <Card />            
      </div>

      <h1 id="originals">Netflix Originals</h1>
      <div className="box">
      <Card />             
      </div>
        </div>
    )
}

export default Main