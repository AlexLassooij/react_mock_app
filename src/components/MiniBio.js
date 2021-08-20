import React, { useState } from 'react';
import './MiniBio.css'
import plus from '../images/black_plus.png'
import minus from '../images/black_minus.png'



//props.children specifies that the card is a child component of its parent (Hero)
const MiniBio = (props) => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)

    const clickClass = click ? 'bioDescription active' : 'bioDescription';

    const imageClass = click ? minus : plus;

    return (

        <div className="mini_bio">
            <h4 style={{color: "black"}} className="photo_name">{props.name}</h4>
            <img className="photo" src={props.image} alt="Image Unavailable"></img>
            <img src={imageClass} width="10%" className="bio-icon" onClick={handleClick} alt="Error"></img>

            <div className={clickClass}>
                <p className="bio_text">
                    {props.bio}
                </p>
            </div>

        </div>

    )
}

export default MiniBio