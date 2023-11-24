import React, { useState, useEffect } from 'react'
import "./Card.css"
import instance from '../../axios'
import { img_Base_url } from '../../constants/constants'
import YouTube from 'react-youtube';


function Card(props) {
  const [id, setid] = useState("")
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const trailer_handle=(id)=>{
    instance.get(`movie/${id}/videos?api_key=6a0c816d63c45ebb531193095512bbe8`).then((res)=>{
      setid(res.data.results[0].key);
    }).catch((e)=>{console.log(e);})
}

const [movie, setMovie] = useState([])
  useEffect(() => {
    instance.get(props.url).then((res) => {
      setMovie(res.data.results)
    }).catch((er) => console.log(er))
  }, [props.url])

  return (
    <div className="box">
      {movie.slice(1, props.size).map((movie_det,index) => {
        return <div key={index}><img onClick={()=>{
          trailer_handle(movie_det.id)
        }} src={img_Base_url + movie_det.backdrop_path} alt="" /></div>
      })}

      <div>
       { id ? <YouTube videoId={id} opts={opts} /> : <div></div> }
      </div>
    </div>
  )
}

export default Card