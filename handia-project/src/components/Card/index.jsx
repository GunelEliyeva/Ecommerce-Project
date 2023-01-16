import React from 'react'
import bannerimg1 from "../../assets/images/banner-v1-img1.webp";
import bannerimg2 from "../../assets/images/banner-v1-img2.webp";
import bannerimg3 from "../../assets/images/banner-v1-img3.webp";
import bannerimg4 from "../../assets/images/banner-v1-img4.webp";
import "./index.scss";
const Card = () => {
  return (
    <div className='banner'>
        <div><img src={bannerimg1} alt="banner-image-1"/>
        <p>Kitchen</p></div>
        <div><img src={bannerimg2} alt="banner-image-2"/>
        <p>Toy</p></div>
        <div><img src={bannerimg3} alt="banner-image-3"/>
        <p>Home decor</p></div>
        <div><img src={bannerimg4} alt="banner-image-4"/>
        <p>Gift ideas</p></div>
    </div>
  )
}

export default Card