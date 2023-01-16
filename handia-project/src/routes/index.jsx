import React from 'react';
import {Routes, Route} from "react-router-dom";
import Blog from '../page/blogs';
import Featured from '../page/featured';
import Home from '../page/home';
import Pages from '../page/pages';
import Shop from '../page/shop';
import "bootstrap/dist/css/bootstrap.min.css"

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/featured" element={<Featured/>}/>
            <Route path="/pages" element={<Pages/>}/>
            <Route path="/blogs" element={<Blog/>}/>

            
        </Routes>
    </div>
  )
}

export default Routing