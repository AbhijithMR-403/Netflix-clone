import React from 'react'
import "./Card.css"
import { img_Base_url } from '../../constants/constants'

function Card(props) {
  return (
    <div>
        <div href=""><img src={props.img_path?img_Base_url+props.img_path:"https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p1.PNG?raw=true"} alt="" /></div>
    </div>
  )
}

export default Card