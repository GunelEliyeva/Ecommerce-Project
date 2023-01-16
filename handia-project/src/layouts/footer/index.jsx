import React from 'react';
import "./index.scss";
import logo from "../../assets/images/logo.webp";


const Footer = () => {
  return (
    <div id='footer'>
      <div className='footer-top'>
        <div className='handia'>
          <div><img src={logo}/></div>
          <div><p>Sophisticated simplicity for the independent mind.</p></div>
<div>
<i className="fa-brands fa-twitter"></i>
<i className="fa-solid fa-basketball"></i>
<i className="fa-brands fa-behance"></i>
<i className="fa-brands fa-instagram"></i>
</div>
        </div>

        <div className='help-information'>
          <h3>Help & Information</h3>
          <div className='xt'></div>
          <ul>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Products Return</li>
            <li>Wholesale Policy</li>
          </ul>
        </div>

        <div className='quick-shop'>
          <h3>Quick Shop</h3>
          <div className='xt'></div>
          <ul>
            <li>Pagination</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
            <li>Accessories</li>
            <li>Term of use</li>
          </ul>
        </div>
        <div className='categories'>
          <h3>Categories</h3>
          <div className='xt'></div>
          <ul>
            <li>Ceramic</li>
            <li>Toys & Games</li>
            <li>Wooden</li>
            <li>Vase</li>
            <li>Decor</li>
          </ul>

        </div>
        </div>
        <div className='footer-bottom'>
          <div className='copyright'><i className="fa-regular fa-copyright"></i> Copyright 2022 | HandiaStore By ShopiLaunch. Powered by Shopify.</div>
       <div className='visa-card'><i className="fa-brands fa-cc-visa"></i> <i className="fa-brands fa-cc-paypal"></i> <i className="fa-brands fa-cc-mastercard"></i> <i className="fa-brands fa-cc-mastercard"></i> <i className="fa-brands fa-cc-discover"></i></div>
        </div>
    </div>
  )
}

export default Footer