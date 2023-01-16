import React, { useState } from "react";
import "./index.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.webp";
import image2 from "../../assets/images/apmenuitem_ihtml_5.webp";
import homeimg1 from "../../assets/images/home1.avif";
import homeimg2 from "../../assets/images/home2.avif";
import homeimg3 from "../../assets/images/home3.avif";
import homeimg4 from "../../assets/images/home4.avif";
import homeimg5 from "../../assets/images/home5.avif";

const Header = () => {
  const [activeBox, setActiveBox] = useState("");
  return (
    <div className="container" id="header">
      <div className="row align-items-center">
        <div className="col-3">
          <Link to={"/"}>
            <h1>
              <img alt="logo" src={logo} />
            </h1>
          </Link>
        </div>
        <div className="col-6">
          <ul className="header-list">
            <li
              onMouseLeave={() => setActiveBox("")}
              onMouseEnter={() => setActiveBox("home")}
              className="header-item"
            >
              <NavLink to={"/home"}>HOME</NavLink>
              <div
                className={`col-4 dropdown-menu home-dropdown ${
                  activeBox === "home" && "active-dropdown"
                }`}
                style={{ height: "600px", width: "900px", left: "-200px" }}
              >
                <div className="row">
                  <div className="col-4 image-box">
                    <img src={homeimg1} alt="home1-image" />
                    <a href="#">Home 1</a>
                  </div>
                  <div className="col-4 image-box">
                    <img src={homeimg2} alt="home2-image" />
                    <a href="#">Home 2</a>
                  </div>
                  <div className="col-4 image-box">
                    <img src={homeimg3} alt="home3-image" />
                    <a href="#">Home 3</a>
                  </div>
                  <div className="col-4 image-box">
                    <img src={homeimg4} alt="home4-image" />
                    <a href="#">Home 4</a>
                  </div>
                  <div className="col-4 image-box">
                    <img src={homeimg5} alt="home5-image" />
                    <a href="#">Home 5</a>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-item" onMouseLeave={() => setActiveBox("")}>
              <NavLink onMouseEnter={() => setActiveBox("shop")} to={"/shop"}>
                SHOP
              </NavLink>
              <div
                style={{ height: "600px", width: "97.5rem", left: "-40rem" }}
                className={`col-4 dropdown-menu shop-dropdown ${
                  activeBox === "shop" && "active-dropdown"
                }`}
              >
                <div className="row">
                  <div className="col-2">
                    <a href="#">SHOP LAYOUTS</a>
                    <ul>
                      <li>Fullwidth</li>
                      <li>Sidebar Layouts</li>
                      <li>Infinity Scroll</li>
                      <li>Backround Mardern</li>
                      <li>List View</li>
                      <li>Banner Marden</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">SHOP HEADING</a>
                    <ul>
                      <li>Heading Style 1</li>
                      <li>Heading Style 2</li>
                      <li>Heading Style 3</li>
                      <li>Heading Style 4</li>
                      <li>Heading Style 5</li>
                      <li>Heading Style 6</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">FILTER LAYOUT</a>
                    <ul>
                      <li>Drawer Filter</li>
                      <li>Off Canvas</li>
                      <li>Filter Dropdown</li>
                      <li>Filter Dropdown 2</li>
                      <li>Filter Acordition</li>
                      <li>Filter Sticky</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">PRODUCT LAYOUTS</a>
                    <ul>
                      <li>Product Extented</li>
                      <li>Product Large Image</li>
                      <li>Product Sticky</li>
                      <li>Product Sticky 2</li>
                      <li>Sticky Center</li>
                      <li>Product Slider Gallery</li>
                      <li>Product Slider Center</li>
                      <li>Product Large Grid</li>
                      <li>Product Small Grid</li>
                      <li>Product Extended-</li>
                      <li>Background</li>
                      <li>Product Sidebar</li>
                      <li>Product Sidebar 2</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">PRODUCT TYPES</a>
                    <ul>
                      <li>Simple</li>
                      <li>Variable Color</li>
                      <li>Variable Image</li>
                      <li>Variable Select</li>
                      <li>External / Affiliate</li>
                      <li>Boosted Sale</li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <a href="#">PRODUCT EXTENDS</a>
                    <ul>
                      <li>Promo text</li>
                      <li>Trust Sale</li>
                      <li>Countdown</li>
                      <li>Featured Video</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-item" onMouseLeave={() => setActiveBox("")}>
              <NavLink
                onMouseEnter={() => setActiveBox("featured")}
                to={"/featured"}
              >
                FEATURED
              </NavLink>
              <div
                style={{ height: "700px", width: "45rem", left: "-200px" }}
                className={`col-4 dropdown-menu featured-dropdown ${
                  activeBox === "featured" && "active-dropdown"
                }`}
              >
                <div className="row">
                  <div className="col-4">
                    <a href="#">ANIMATE DEMOS </a>
                    <ul>
                      <li>Quickview-Popup</li>
                      <li>Minicatd Draws</li>
                      <li>Quick Add to cart</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <a href="#">9 PRODUCT HOVER</a>
                    <ul>
                      <li>Product Hover Style 1</li>
                      <li>Product Hover Style 2</li>
                      <li>Product Hover Style 3</li>
                      <li>Product Hover Style 4</li>
                      <li>All Style</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <a href="#">THEME ELEMENT</a>
                    <ul>
                      <li>Ajax Search</li>
                      <li>Ajax Minicart</li>
                      <li>Recently Products</li>
                      <li>Social Share</li>
                    </ul>
                  </div>
                  <div className="col-12">
                    <div className="image-box">
                      <img alt="page-img" src={image2} />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-item" onMouseLeave={() => setActiveBox("")}>
              <NavLink onMouseEnter={() => setActiveBox("pages")} to={"/pages"}>
                PAGES
              </NavLink>
              <div
                style={{ height: "450px", width: "50rem", left: "-200px" }}
                className={`col-4 dropdown-menu pages-dropdown ${
                  activeBox === "pages" && "active-dropdown"
                }`}
              >
                <div className="row">
                  <div className="col-4">
                    <a href="#">DEMO LAYOUTS</a>
                    <ul>
                      <li>Full Screen</li>
                      <li>Heading Background</li>
                      <li>Simple</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <a href="#">PRE-BUILD PAGES</a>
                    <ul>
                      <li>About Us #1</li>
                      <li>About Us #2</li>
                      <li>About Us #3</li>
                      <li>About Us #4</li>
                      <li>Contact Us #1</li>
                      <li>Contact Us #2</li>
                      <li>Contact Us #3</li>
                      <li>FAQs</li>
                    </ul>
                  </div>
                  <div className="col-4">
                    <a href="#">ECOMERCE</a>
                    <ul>
                      <li>Cart</li>
                      <li>404 Page</li>
                      <li>My account</li>
                      <li>Login / Register</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="header-item" onMouseLeave={() => setActiveBox("")}>
              <NavLink onMouseEnter={() => setActiveBox("blogs")} to={"/blogs"}>
                BLOGS
              </NavLink>
              <div
                style={{ height: "450px", width: "50rem", left: "-300px" }}
                className={`col-4 dropdown-menu blogs-dropdown ${
                  activeBox === "blogs" && "active-dropdown"
                }`}
              >
                <div className="row">
                  <div className="col-3">
                    <a href="#">SINGLE POST</a>
                    <ul>
                      <li>No Sidebar</li>
                      <li>Left Sidebar</li>
                      <li>Right Sidebar</li>
                      <li>Standar</li>
                      <li>Audio</li>
                      <li>Video</li>
                    </ul>
                  </div>
                  <div className="col-3">
                    <a href="#">LAYOUT</a>
                    <ul>
                      <li>No Sidebar</li>
                      <li>Left Sidebar</li>
                      <li>Right Sidebar</li>
                      <li>Standar</li>
                      <li>Blog List</li>
                      <li>Grid</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <a href="#">NEW PRODUCTS</a>
                    <ul>
                      <li>Toddler Climbing Toy</li>
                      <li>Petite Reed Diffuser</li>
                      <li>Handmade Wooden</li>
                      <li>Rattan Tissue Box</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default Header;
