import React from 'react';
import HandMadeBags from '../../components/handmade-bags';
import "./index.scss";
import { Carousel } from 'antd';
import imageslide from "../../assets/images/slideshowV1-bg1.webp";
import imagesslide from "../../assets/images/slideshowV1-bg2.webp";

const Home = () => {
  return (
    <div id='home'>
      <div className='slide-1'>
      <Carousel autoplay>
    <div>
      <img src={imageslide} alt="slide-image-1"/>
      
    </div >
    <div>
      <img src={imagesslide} alt="slide-image-2"/>
    </div>
    
  </Carousel>
      </div>
      <HandMadeBags />
    </div>
  )
}

export default Home