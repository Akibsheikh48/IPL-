import React from 'react'
import './Image.css'

function Image({img, title, desc}) {
    return (
        <div className="image">
            <img src={img}
            alt=""/>
            <h2>{title}</h2>
            <h4>{desc}</h4>
        </div>
    )
}

export default Image
