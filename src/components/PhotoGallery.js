//Colin

import React, {useState} from 'react'
import './PhotoGallery.css'
import {images} from '../helpers/gallerydata'
import {FcNext, FcPrevious} from 'react-icons/fc'
import ParallaxSection from './Parallax'
// import { FcNext, FcPrevious} from 'react-icons/fa'; this wasn't working

function PhotoGallery() {

    const [currImg, setCurrImg] = useState(0)

    return (
      <div>

          <ParallaxSection />
      
          

        </div>
      );
    }
export default PhotoGallery
