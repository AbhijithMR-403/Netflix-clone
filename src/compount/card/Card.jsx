import React,{useState,useEffect} from 'react'
import "./Card.css"
import instance from '../../axios'
import { img_Base_url } from '../../constants/constants'

function Card(props) {
  const [movie,setMovie] = useState([])
    useEffect(()=>{
        instance.get(props.url).then((res)=>{
          setMovie(res.data.results)
        })
      },[props.url])
  return (
    <div className="box">
      {movie.slice(1,props.size).map((movie_det)=>{
        console.log(movie_det.backdrop_path);
                    return <div><img src={img_Base_url+movie_det.backdrop_path} alt="" /></div>
                  })}
    </div>
  )
}

export default Card