import React from 'react'
import './Photo.css'

//props.children specifies that the card is a child component of its parent (Hero)
const Photo= (props)=>{
    <noscript>if no width is passed, then defualt will be 100%</noscript>
    return(
        <div className="side_photo" {...props}>
            <h4 className="photo_name">{props.name}</h4>
            <img className="photo" src={props.image} alt="Image Unavailable"></img>
        </div>
    )
}

export default Photo