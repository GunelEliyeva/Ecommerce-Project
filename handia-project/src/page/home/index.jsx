import React from 'react';
import HandMadeBags from '../../components/handmade-bags';
import "./index.scss";
import Card from "../../components/Card"
import { Carousel } from 'antd';
import imageslide from "../../assets/images/slideshowV1-bg1.webp";
import imagesslide from "../../assets/images/slideshowV1-bg2.webp";
import Inspiration from '../../components/inspiration';

const Home = () => {
  return (
    <div id='home'>
      <div className='slide-1'>
      <Carousel autoplay>
    <div className='container1'>
      <div className='section-img1'><img  src={imageslide} alt="slide-image-1"/></div>
      <div className='handmade-text1'> 
        <h1>Handmade Shop</h1>
        <p>Good reliability and lifelong lasting time, is useful and durable.
          Harmless, no peculiar smell, you can feel comfortable to buy and use.
          Lightweight and small size, can save your space to store.
        </p>
        <button className='shop-now1'>SHOP NOW</button>
        <button className='view-col1'>VIEW COLLECTION</button>
      </div>
      
    </div >
    <div className='container2'>
      <div className='section-img2'><img  src={imagesslide} alt="slide-image-2"/></div>
      <div className='handmade-text2'> 
        <h1>Handmade Shop</h1>
        <p>
          "This was my first experience shopping at Woodcraft and so was very pleased with the personalized service and, the knowledge of the staff".
        </p>
        <button className='shop-now2'>SHOP NOW</button>
        <button className='view-col2'>VIEW COLLECTION</button>
      </div>
    </div>
    
  </Carousel>
      </div>
      <Card/>
      <HandMadeBags />
    </div>
  )
}

export default Home