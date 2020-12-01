import React from 'react'
import './Video.css';



function Video({image, title}) {
    return (
        <div className="video">
            <img src={image}
            alt=""/>
           <h2>{title}</h2>
         
           
        </div>
    )
}

export default Video
